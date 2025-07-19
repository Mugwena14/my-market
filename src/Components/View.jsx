import styles from './View.module.css'
import snd from '../assets/images/iPhone-XR.png'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";

const View = () => {
    return (
        <div className={styles.cont}>
            <div className={styles.box1}>
                <p>
                    <span><IoArrowBackOutline /></span>
                    Go back
                </p>
                <img src={snd} alt="" />
            </div>
            <div className={styles.box2}>
                <p>Langavi</p>
                <h1>Apple iPhone 16</h1>
                <h2>R17 000</h2>
                <p><span><AiOutlineExclamationCircle /></span>
                    I'm available during morning hours</p>
                <div className={styles.description}>
                    <div className={styles.desHead}>
                        <h3>Product Description</h3>
                        <FaChevronDown />
                    </div>
                    <p></p>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contHead}>
                        <h3>Hit me up:</h3>
                        <FaChevronDown />
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.social}>
                            <div className={styles.icon}>
                                <IoCallSharp />
                            </div>
                            <div className={styles.info}>
                                <p>Calls</p>
                                <p>068 502 1117</p>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.icon}>
                                <FaWhatsapp />
                            </div>
                            <div className={styles.info}>
                                <p>whatsaap</p>
                                <p>068 502 1117</p>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.icon}>
                                <MdEmail />
                            </div>
                            <div className={styles.info}>
                                <p>Email</p>
                                <p>mlangaviclyde@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.social}>
                            <div className={styles.icon}>
                                <IoChatboxOutline />
                            </div>
                            <div className={styles.info}>
                                <Link to=''>Let's Chat</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View