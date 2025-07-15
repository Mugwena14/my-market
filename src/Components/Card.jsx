import styles from '../Components/Card.module.css'
import snd from '../assets/images/iPhone-16-Plus.png'
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Card = () => {
    return (
        <div className={styles.down}>
            <div className={styles.featured}>
                <h3>Featured.</h3>
            </div>
            <div className={styles.main}>
                <div className={styles.featureCont}>
                    <div className={styles.card}>
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
                </div>
                <div className={styles.featureCont}>
                    <div className={styles.card}>
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
                </div>
                <div className={styles.featureCont}>
                    <div className={styles.card}>
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
                </div>
            </div>
        </div>
    )
}

export default Card