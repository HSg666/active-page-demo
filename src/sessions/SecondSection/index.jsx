import React, {  useRef,useState, useEffect } from 'react'
import CartoonImg from '../../assets/cartoon.jpg'
import FoodImg from '../../assets/food.jpg'
import MovieImg from '../../assets/movie.png'
import LifeImg from '../../assets/life.jpg'
import styles from './styles.module.scss'
import classNames from 'classnames'

const tabs = [
    {
        key: 'cartoon',
        name: '动画',
        img: CartoonImg
    },
    {
        key: 'food',
        name: '美食',
        img: FoodImg
    },
    {
        key: 'movie',
        name: '电影',
        img: MovieImg
    },
    {
        key: 'lift',
        name: '生活',
        img: LifeImg
    },
] 
const Tab_Title = 56

const SecondSession = () => {
    const [activeTab, setActiveTab] = useState('cartoon')
    const secondSectionRef = useRef(null)
    const [isFixed, setIsFixed] = useState(false)

    /*
    自动吸顶
        1、给页面盒子的添加由useRef生成的动态ref值  目的拿到标签元素
        2、用滚动函数监听它的滚动距离，如果有就获取它的滚动top值，滚动top值<=0时说明到顶了，此时将它的判断值isFixed设置为true
        3、在全局useEffect中监听同时销毁
        4、给tab添加classnames动态判断样式  如果isFixed为true说明到顶了，则给它添加isFixed样式  isFixed样式为固定定位 
            同时给tab的默认样式添加绝对定位，同时最外层盒子的padding-top设置为tab的高度
        5、由于tab吸顶后内容的标题被ta盖住了，此时可以给内容盒子加一个滚动外边距  section scroll-margin:56px  isFixed类添加背景浅黄色
   */
  const onScroll = () => {
    if(secondSectionRef.current) {
        const { top } = secondSectionRef.current.getBoundingClientRect()
        setIsFixed(top <= 30) // 小于30才更改  否则不修改
    }

    /* 滑动时自动高亮对应的tab栏(在滚动函数中进行处理)
        1、获取所有secttion标签伪数组  将其转化为真实数组
        2、获取每个section的top值，如果小于等于56说明到顶了，则将当前section标签的id设置进控制tab栏滑动的setActiveTab中  因为activeTab控制tab栏被选中的值
        3、设置setActiveTab之前需要获取当前小于等于56的标签id，所以需要用getAttribute取出该标签的id 
    */

    const NodesEl = document.querySelectorAll('section')
    // 获取每个元素的getBoundingClientRect时不需要用current
    // 获取用useRef绑定的值就需要用current获取
    Array.from(NodesEl).forEach( EL => {
        const { top } = EL.getBoundingClientRect()
        const key = EL.getAttribute('data-id') || ''
        if( top <= Tab_Title ) setActiveTab(key)
    } )

  }
    /* 点击tab跳转到对应的内容
        1、给每个tab下的内容盒子添加单独的id
        2、点击每个tab栏将其名称传到activeTed函数中，先将被选中的变量值更改为当前点中的
        3、再动态获取被点击的section标签
        4、将被点击的标签滚动到顶部
    */

    const activeTed = (key) => {
        setActiveTab(key) // 将被点击的key传进来

        let keyEle = document.querySelector(`[data-id=${key}]`)

        if(keyEle) keyEle.scrollIntoView({ behavior: 'smooth' })
        
        
    }
    
    // 全局监听滚动
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
  
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  /*
    底部固定app打开  当isFixed值为true时则显示  否则隐藏  显示时动态添加visible样式   同样用classNames动态判断 
  */


    return (
        <div className={styles.secondSection} ref={secondSectionRef}>
            <ul className={classNames({ [styles.isFixed]: isFixed } )}>
                {
                    tabs.map( tab => (
                        <li key={tab.key}  onClick={ ()=> activeTed(tab.key) }>
                            <span>{ tab.name }</span>
                            <span className={ classNames(styles.line,{ [styles.visibel]: activeTab === tab.key })  }></span>
                        </li>
                    ) )
                }
            
            </ul>
            {
                tabs.map( tab => (
                    <section className={styles.section} key={ tab.key } data-id={ tab.key }>
                        <h2>{ tab.name }</h2>
                        <img src={tab.img} alt={tab.name} />
                    </section>
                    
                ) )
            }
          
        </div>
    )
}
export default SecondSession