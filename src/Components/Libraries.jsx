import styles from './Certificates.module.css'
import libraries from '../assets/images/FrontEnd Libraries.png'
import { Link } from 'react-router-dom'; 
import { IoArrowBackOutline } from "react-icons/io5";

const Libraries = () => {
    return (
        <div>
            <Link to='/Index' className={styles.back}>
                <IoArrowBackOutline  className={styles.arrow}/>
                <p className={styles.home}>Home</p>
            </Link>
            <h1>FrontEnd Libraries Certification</h1>
            <img src={libraries} alt="" />
        </div>
    )
}

export default Libraries