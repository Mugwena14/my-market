import styles from './Explore.module.css'
import image from '../assets/images/playStation.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
    return (
        <>
                <div className={styles.explore}>
                <div>
                    <h1>Browse Products</h1>
                </div>
                <div className={styles.container}>
            <Link to='/View' className={styles.link}>
                    <div className={styles.box}>
                        <img src={image} alt="" />
                        <div className={styles.info}>
                            <h3>Play Station 6</h3>
                            <p>By Langavi</p>
                        </div>
                    </div>
            </Link>
                </div>
            </div>
        </>
    )
}

export default Explore