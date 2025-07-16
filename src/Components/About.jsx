import styles from '../Components/About.module.css'

const About = () => {
    return (
        <div>
            <div className={styles.about}>
                <h2>About this Market-Place:</h2>
            </div>
            <div className={styles.paragraph}>
                <p className={styles.paragraphs}>
                    Welcome to your go-to free marketplace demo—a 
                    platform designed to simplify buying and selling
                    between everyday users. Whether you're listing a 
                    product you no longer need or browsing for that 
                    hidden gem someone else wants to pass on, i have 
                    made it intuitive and accessible.
                </p>
                <p className={styles.activities}>
                    <span>You can:</span><br />
                    • 🧾 Upload & List Products — Share what you’re selling in just a few clicks.
                    • 💬 Chat with Sellers or Buyers — Ask questions, confirm details, and negotiate before you commit.
                    • 🛒 Buy from Others — Discover items from fellow users and make purchases with confidence.
                </p>
                <p className={styles.paragraphs}>
                    This version is a demo of what's to come. 🚧 In 
                    the upcoming update, we're adding powerful features
                    like product deletion—but not just for anyone. 
                    Only the original uploader will have the authority to 
                    remove their listed items, ensuring secure and fair control. 🔐
                </p>
                <p className={styles.paragraphs}>
                    To manage authentication while it's still in development,
                    all listed products will automatically disappear after 30 days. 
                    This keeps the platform tidy and protects users as we fine-tune 
                    those account-based permissions.
                </p>
                <p className={styles.paragraphs}>
                    Catch the creator behind this build on: [insert your contact
                    or portfolio link here]
                </p>
            </div>
        </div>
    )
}

export default About