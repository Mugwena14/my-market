import styles from './Explore.module.css'
import snd from '../assets/images/iPhone-16-Plus.png'
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";


const Explore = () => {
    return (
        <div>
            <div className={styles.top}>
                <h2>Browse Products</h2>
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
    )
}

export default Explore