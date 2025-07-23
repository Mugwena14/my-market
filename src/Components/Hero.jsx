import styles from '../Components/Hero.module.css'
import snd from '../assets/images/iPhone-16-Plus.png'
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import About from './About';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className={styles.main}>
            <div className={styles.hero}>
                <div className={styles.left}>
                    <h2>Discover &</h2>
                    <h2>Sell items Digitally.</h2>
                    <h2>Only on LoopKart!</h2>
                    <p>Ready to Benefit? Let 'LoopKart' connect <br/> the dots to your next sell / next purchase.<br/> 
                    <span> FREE OF CHARGE.</span>
                    </p>
                    <div className={styles.buttons}>
                        <Link to='/Explore'>
                            <button className={styles.btn}>Explore</button>
                        </Link>
                        <Link to='/Sell'>
                            <button className={styles.btn}>Sell</button>
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.first}>
                        <div className={styles.image}>
                            <img src={snd} alt="" />
                        </div>
                        <div className={styles.info}>
                            <p><CiUser />
                            <span className={styles.tags}>
                                NAME
                            </span>
                            </p>
                            <p><CiLocationOn />
                            <span className={styles.tags}>
                                Location
                            </span>
                            </p>
                            <div className={styles.bottom}>
                            <p><CiDollar /> 
                            <span className={styles.tags}>
                                Price
                            </span>
                            </p>
                            <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.second}>
                        <div className={styles.image}>
                            <img src={snd} alt="" />
                        </div>
                        <div className={styles.info}>
                            <p>NAME</p>
                            <p>Location</p>
                            <div className={styles.bottom}>
                            <p>Price</p>
                            <button>View</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <About/>
        </>
    )
}

export default Hero