import styles from '../Components/NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div className={styles.nav}>
                <div className={styles.logo}>
                <h3>Yoo Loop</h3>
                </div>
                <div className={styles.links}>
                <Link className={styles.link} to="/index">Home</Link>
                <Link className={styles.link} to="/about">About</Link>
                <Link className={styles.link} to="/buy">Explore</Link>
                <button>Sell</button>
                </div>
            </div>
        </div>
        
    )
}

export default NavBar