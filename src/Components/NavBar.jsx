import styles from '../Components/NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h3>Yoo Loop</h3>
            <Link to="/index">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/buy">Buy</Link>
            <button>Sell</button>
        </div>
    )
}

export default NavBar