import React from 'react'
import Title1Img from '../../assets/title1.jpg'
import Title2Img from '../../assets/title2.jpg'
import CartoonImg from '../../assets/cartoon.jpg'
import CommentImg from '../../assets/comment.jpg'
import styles from './styles.module.scss'

const ThirdSession = () => {
    return (
        <div className={styles.thirdSection}>
            <img src={Title1Img} alt="Title1Img" />
            <img src={CartoonImg} className={styles.comment} alt="CartoonImg" />
            <img src={Title2Img} alt="Title2Img" />
            <img src={CommentImg} className={styles.comment} alt="CommentImg" />
        </div>
    )
}
export default ThirdSession