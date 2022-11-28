import React from 'react'
import CartoonImg from '../../assets/cartoon.jpg'
import FoodImg from '../../assets/food.jpg'
import MovieImg from '../../assets/movie.png'
import LifeImg from '../../assets/life.jpg'
import styles from './styles.module.scss'

const SecondSession = () => {
    return (
        <div className={styles.secondSection}>
            <ul>
                <li>动画</li>
                <li>美食</li>
                <li>电影</li>
                <li>生活</li>
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