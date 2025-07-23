import styles from '../Components/NavBar.module.css'
import { Link } from 'react-router-dom'
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const NavBar = () => {

    const [showFull, setShowFull] = useState(false);

    function showSideBar(){
        setShowFull(prevState => !prevState);
    }

    return (
        <div className={styles.fixed}>
            <div className={styles.nav}>
                <div className={styles.logo}>
                <h3><span className={styles.loop}>L</span> Kart!</h3>
                </div>
                <div className={styles.links}>
                    <Link className={styles.link} to="/Index">Home</Link>
                    <Link className={styles.link} to="/About">About</Link>
                    <Link className={styles.link} to="/Explore">Explore</Link>
                    <button className={styles.bt}>Sell</button>
                    {showFull ? (
                        <>
                            <a onClick={() => showSideBar()} className={styles.hideMenu}><IoMdClose /></a>
                        </>
                    ) : (
                        <>
                        <a onClick={() => showSideBar()} className={styles.sideMenu}><IoMenuOutline /></a>
                        
                        </>
                    )}
                </div>
            </div>
                        {showFull ? (
                            <>
                            <div className={styles.side}>
                                <div className={styles.col}>
                                    <div className={styles.sideLink}>
                                        <Link onClick={() => showSideBar()} className={styles.sideLinks} to="/index">Home</Link>
                                        <Link onClick={() => showSideBar()} className={styles.sideLinks} to="/About">About</Link>
                                        <Link onClick={() => showSideBar()} className={styles.sideLinks} to="/Explore">Explore</Link>
                                        <Link onClick={() => showSideBar(false)} className={styles.sideLinks} to="/Sell">Sell</Link>
                                    </div>
                                </div>
                            </div>
                            </>
                        ) : ''}
        </div>
        
    )
}

export default NavBar