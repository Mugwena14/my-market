import styles from './Footer.module.css';

const  Footer = () => {
    return (
        <footer>
            <div className={styles.top}>
                <p>&copy; Built by Makhubele Langavi Clyde | Junior-Front-End Developer | React</p>
                <p>Open to Full-Time Opportunities or Freelance roles, Let's Connect:</p>
            </div>
            <div className={styles.connect}>
                <div className={styles.connectLeft}>
                    <p>Email: <a href="mailto:mlangaviclyde@gmail.com">mlangaviclyde@gmail.com</a></p>
                    <p>Phone: <a href="tel:+27 68 502 1117">+27 502 1117</a></p>
                    <p>GitHub Profile: <a href="">link</a></p>
                    <p>LinkedIn Profile: <a href="">link</a></p>
                </div>
                <div className={styles.connectRight}>
                    <p><a href="">Resume / CV</a></p>
                    <p><a href="">Certified Front-End-Developer</a></p>
                    <p><a href="">My Portfolio:</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer