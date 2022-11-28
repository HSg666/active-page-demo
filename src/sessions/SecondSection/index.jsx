import React, { useState } from 'react'
import CartoonImg from '../../assets/cartoon.jpg'
import FoodImg from '../../assets/food.jpg'
import MovieImg from '../../assets/movie.png'
import LifeImg from '../../assets/life.jpg'
import styles from './styles.module.scss'
import classNames from 'classnames'

const tabs = [
    {
        key: 'cartoon',
        name: '动画'
    },
    {
        key: 'food',
        name: '美食'
    },
    {
        key: 'movie',
        name: '电影'
    },
    {
        key: 'lift',
        name: '生活'
    },
] 

const SecondSession = () => {
    const [activeTab, setActiveTab] = useState('cartoon')
    return (
        <div className={styles.secondSection}>
            <ul>
                {
                    tabs.map( tab => (
                        <li key={tab.key}  onClick={ ()=> setActiveTab(tab.key) }>
                            <span>{ tab.name }</span>
                            <span className={ classNames(styles.line,{ [styles.visibel]: activeTab === tab.key })  }></span>
                        </li>
                    ) )
                }
            
            </ul>
            <section className={styles.section}>
                <h2>动画</h2>
                <img src={CartoonImg} alt="CartoonImg" />
            </section>
            <section className={styles.section}>
                <h2>美食</h2>
                <img src={FoodImg} alt="FoodImg" />
            </section>
            <section className={styles.section}>
                <h2>电影</h2>
                <img src={MovieImg} alt="MovieImg" />
            </section>
            <section className={styles.section}>
                <h2>生活</h2>
                <img src={LifeImg} alt="LifeImg" />
            </section>
        </div>
    )
}
export default SecondSession