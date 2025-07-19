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
                <p><span className={styles.name}>Langavi</span></p>
                <h1>Apple iPhone 16</h1>
                <h2>R17 000</h2>
                    <p><span className={styles.available}>
                            <span>
                                <AiOutlineExclamationCircle />
                            </span>
                            <span>
                                I'm available during morning hours
                            </span>
                        </span>
                    </p>
                <div className={styles.description}>
                    <div className={styles.desHead}>
                        <h3>Product Description</h3>
                        <span className={styles.down}>
                            <FaChevronDown />
                        </span>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam est iste laborum, impedit consectetur quos blanditiis, iure voluptatum facere ea deleniti tempora, ratione sed modi. Veritatis nemo veniam vitae animi!</p>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contHead}>
                        <h3>Hit me up:</h3>
                        <span className={styles.down}>
                            <FaChevronDown />
                        </span>
                    </div>
                    <div className={styles.contacts}>
                        <div className={styles.left}>
                            <div className={styles.social}>
                                <div className={styles.icon}>
                                    <span className={styles.icons}>
                                        <IoCallSharp />
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.contactUp}>Calls</p>
                                    <p className={styles.contactBelow}>068 502 1117</p>
                                </div>
                            </div>
                            <div className={styles.social}>
                                <div className={styles.icon}>
                                    <span className={styles.icons}>
                                        <MdEmail />
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.contactUp}>Email</p>
                                    <p className={styles.contactBelow}>mlangaviclyde@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.social}>
                                <div className={styles.icon}>
                                    <span className={styles.icons}>
                                        <FaWhatsapp />
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <p className={styles.contactUp}>whatsaap</p>
                                    <p className={styles.contactBelow}>068 502 1117</p>
                                </div>
                            </div>
                            <div className={styles.social}>
                                <div className={styles.icon}>
                                    <span className={styles.icons}>
                                        <IoChatboxOutline />
                                    </span>
                                </div>
                                <div className={styles.info}>
                                    <Link to=''>Let's Chat</Link>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View