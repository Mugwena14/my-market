import styles from './Footer.module.css';

const  Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div className={styles.footer}>
                <div></div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>CONTACT</h3>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>HELP</h3>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>CAREER</h3>
                    </div>
                </div>
                <div className={styles.cont}>
                    <div className={styles.top}>
                        <h3>RESOURCES</h3>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer