import styles from './Explore.module.css'
import snd from '../assets/images/iPhone-16-Plus.png'
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";


const Explore = () => {
    return (
        <div className={styles.main}>
            <div className={styles.top}>
                <h2>Browse Products</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.featureCont}>
                    <div className={styles.image}>
                        <img src={snd} alt="" />
                    </div>
                    <div className={styles.info}>
                        <h4 className={styles.productHead}>
                        <span className={styles.product}>
                            iPhone 16 
                        </span>
                        </h4>
                        <p className={styles.nameHead}>
                            <span className={styles.profile}>
                                <CiUser />
                            </span>
                        <span className={styles.name}>
                            Langavi
                        </span>
                        </p>
                        <div className={styles.down}>
                            <div className={styles.downLeft}>
                                <p className={styles.priceHead}> 
                                <span className={styles.price}>
                                    R17 000
                                </span>
                                </p>
                                <p className={styles.locationHead}>
                                    <span className={styles.profileLocation}>
                                        <CiLocationOn />
                                    </span>
                                <span className={styles.location}>
                                    Location
                                </span>
                                </p>
                            </div>
                            <div className={styles.downRight}>
                                <a href='/View'><button>View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore