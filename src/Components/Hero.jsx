import styles from '../Components/Hero.module.css'


const Hero = () => {
    return (
        <div className={styles.main}>
            <div className={styles.hero}>
                <div className={styles.left}>
                    <h2>Discover &</h2>
                    <h2>Sell items Digitally.</h2>
                    <h2>Only on Yoo!</h2>
                    <p>Ready to Benefit? Let 'Yoo Loop' connect <br/> the dots to your next sell / next purchase.<br/> 
                    <span> FREE OF CHARGE.</span>
                    </p>
                    <div className={styles.buttons}>
                    <button className={styles.btn}>Explore</button>
                    <button className={styles.btn}>Sell</button>
                    </div>
                </div>
                <div className={styles.right}>
                    <h2>Image Part</h2>
                </div>
            </div>
        </div>
    )
}

export default Hero