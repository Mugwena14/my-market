import { useState } from 'react';
import styles from '../Components/About.module.css'
import { 
    FaSquareGithub,
    FaLinkedin,
    FaXTwitter
} from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdExpandMore } from "react-icons/md";
import { MdExpandLess } from "react-icons/md";

const About = () => {

    const [showMore, setShowFull] = useState(true);

    function onHandle(){
        setShowFull(prevState => !prevState)
    }

    return (
        <div>
            <div className={styles.aboutCont}>
                <div className={styles.contLeft}>
                    <div className={styles.aboutUs}>
                        <h4 className={styles.aboutP}>
                            About Us
                        </h4>
                    </div>
                    <h2 className={styles.abtM}>About this MarketPlace:</h2>
                        <p>
                            Welcome to your go-to free marketplace demo - a 
                            platform designed to simplify buying and selling
                            between everyday users.
                            Catch the creator behind this build:
                        </p>
                        <div className={styles.icons}>
                            <Link className={styles.icon1} to='https://github.com/Mugwena14'><FaSquareGithub /></Link>
                            <Link className={styles.icon2} to='https://linkedin.com/in/langavi-makhubele-clyde'><FaLinkedin /></Link>
                            <Link className={styles.icon3} to='https://x.com/MugwenaDev'><FaXTwitter /></Link>
                            <Link className={styles.icon4} to='https://youtube.com/@MugwenaDev'><FaYoutube /></Link>
                        </div>
                </div>
                <div className={styles.contRight}>
                    {showMore ? (
                        <>
                        <p>
                        Whether you're listing a 
                        product you no longer need or browsing for that 
                        hidden gem to be passed on, i have 
                        made it possible by letting the two parties
                        chat before one's commit.
                        </p>
                        <p>
                            This version is a demo of what's to come. In 
                            the upcoming update, we're adding powerful features
                            like product deletion, but not just for anyone. 
                            Only the original up...
                        </p>
                        </>
                    ) : (
                        <>
                        <p>
                        Whether you're listing a 
                        product you no longer need or browsing for that 
                        hidden gem to be passed on, i have 
                        made it possible by letting the two parties
                        chat before one commit.
                        </p>
                        <p>
                            This version is a demo of what's to come. In 
                            the upcoming update, we're adding powerful features
                            like product deletion, but not just for anyone. 
                            Only the original uploader will have the authority to 
                            remove their listed items, ensuring secure and fair control.
                        </p>
                        <p>
                            To manage authentication while it's still in development,
                            all listed products will automatically disappear after 30 days. 
                            This keeps the platform tidy and protects users as we fine-tune 
                            those account-based permissions. Happy trade!
                        </p>
                        </>
                    )}
                    
                    <button onClick={() => onHandle()} className={styles.btn}>{showMore ? 
                    <> 
                        <div className={styles.tgl1}>
                            <span className={styles.show}>
                                More
                            </span>
                            <span className={styles.toggle}>
                            <MdExpandMore />
                            </span>
                        </div>
                    </> : 
                    <> 
                        <div className={styles.tgl2}>
                            <span className={styles.show}>
                                Less
                            </span>
                            <span className={styles.toggle}>
                            <MdExpandLess />
                            </span>
                        </div>
                    </>
                    }</button>
                </div>
            </div>
        </div>
    )
}

export default About