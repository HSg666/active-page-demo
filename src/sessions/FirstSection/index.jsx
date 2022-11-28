import React from 'react'
import branner from '../../assets/banner.jpg'
import styles from './styles.module.scss'

const FirstSession = () => {
    return (
        <div className={styles.firstSection}>
            <img src={branner} alt="banner" />
        </div>
    )
}
export default FirstSession