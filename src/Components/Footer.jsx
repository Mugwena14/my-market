import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const  Footer = () => {

    

    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.cont}>
                    <h2 className={styles.logo}>
                        <span  className={styles.logoL}>
                            L
                        </span>
                        Kart!
                    </h2>
                    <p> Jr FrontEnd Dev | React. <br />
                    Open to Full-Time Opportunities. <br />
                    Suggestions or just a simple hi? <br />
                    HIT ME UP:
                    </p>
                    <div className={styles.icons}>
                        <Link className={styles.icon1} to=""><FaSquareGithub /></Link>
                        <Link className={styles.icon2} to=""><FaLinkedin /></Link>
                    </div>
                    
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>CONTACT</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to=''>GitHub</Link></p>
                        <p><Link className={styles.links} to=''>LinkedIn</Link></p>
                        <p><Link className={styles.links} to=''>Email</Link></p>
                        <p><Link className={styles.links} to=''>Phone</Link></p>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>HELP</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to=''>How to use</Link></p>
                        <p><Link className={styles.links} to='/Terms'>Terms & Conditions</Link></p>
                        <p><Link className={styles.links} to='/Privacy'>Policy & Privacy</Link></p>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>CAREER</h3>
                    </div>
                    <div className={styles.info}>
                        <p><Link className={styles.links} to='/Javascript'>Certified in Algorithms in JavaScript</Link></p>
                        <p><Link className={styles.links} to='/Responsive'>Certified in Responsive Web Design</Link></p>
                        <p><Link className={styles.links} to='/Libraries'>Certified in FrontEnd Libraries</Link></p>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>RESOURCES</h3>
                    </div>
                    <div className={styles.info}>
                        <p>HTML / CSS</p>
                        <p>React</p>
                        <p>FireBase</p>
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer