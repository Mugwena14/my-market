import styles from './Certificates.module.css'
import javascript from '../assets/images/JavaScript Algorithms Certificate.png'
import { Link } from 'react-router-dom'; 
import { IoArrowBackOutline } from "react-icons/io5";


const JavaScript = () => {
    return (
        <div>
            <Link to='/Index' className={styles.back}>
                <IoArrowBackOutline  className={styles.arrow}/>
                <p className={styles.home}>Home</p>
            </Link>
            <h1>Algorithms & Data Structures In JavaScript</h1>
            <img src={javascript} alt="" />
        </div>
    )
}

export default JavaScript