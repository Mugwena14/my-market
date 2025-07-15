import styles from '../Components/Hero.module.css'
import fst from '../assets/images/iPhone-XR.png'
import snd from '../assets/images/iPhone-16-Plus.png'


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
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <img src={snd} alt="" />
                        </div>
                        <div className={styles.info}>
                            <p>NAME</p>
                            <p>Location</p>
                            <p>Price</p>
                        </div>
                    </div>
                    <div className={styles.first}></div>
                </div>
            </div>
        </div>
    )
}

export default Hero