import styles from './Certificates.module.css'
import responsive from '../assets/images/Responsive Web Design Certificate.png'
import { Link } from 'react-router-dom'; 
import { IoArrowBackOutline } from "react-icons/io5";


const Responsive = () => {
    return (
        <div>
            <Link to='/Index' className={styles.back}>
                <IoArrowBackOutline  className={styles.arrow}/>
                <p className={styles.home}>Home</p>
            </Link>
            <h1>Responsive Web Design</h1>
            <img src={responsive} alt="" />
        </div>
    )
}

export default Responsive