import styles from '../Components/About.module.css'

const About = () => {
    return (
        <div>
            <div className={styles.about}>
                <h2>About this Market-Place:</h2>
            </div>
            <div className={styles.aboutCont}>
                <div className={styles.contLeft}>
                    <p>About Us</p>
                    <h3>About this MarketPlace:</h3>
                    <p>
                        Welcome to your go-to free marketplace demo—a 
                        platform designed to simplify buying and selling
                        between everyday users.
                        Catch the creator behind this build:
                    </p>
                </div>
                <div className={styles.contRight}>
                    <p>
                        Whether you're listing a 
                        product you no longer need or browsing for that 
                        hidden gem to be passed on, i have 
                        made possible by letting the two parties
                        chat before one commit.
                    </p>
                    <p>
                        This version is a demo of what's to come. 🚧 In 
                        the upcoming update, we're adding powerful features
                        like product deletion, but not just for anyone. 
                        Only the original uploader will have the authority to 
                        remove their listed items, ensuring secure and fair control. 🔐
                    </p>
                    <p>
                        To manage authentication while it's still in development,
                        all listed products will automatically disappear after 30 days. 
                        This keeps the platform tidy and protects users as we fine-tune 
                        those account-based permissions. Happy trade!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About