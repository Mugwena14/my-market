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
import { useState } from 'react';
import { MdExpandLess } from "react-icons/md";
import image from '../assets/images/playStation.jpeg'



const View = () => {

    const [show, setShow] = useState(true);
    const [showFull, setShowFull] = useState(true);

    function handleClick(){
        setShow(prevState => !prevState)
    }

    function handleClick2(){
        setShowFull(prevState => !prevState)
    }

    return (
        <div className={styles.view}>
            <div className={styles.goBack}>
                <Link to='/Explore' className={styles.back}>
                    <p>
                        <span className={styles.backIcon}><IoArrowBackOutline /></span>
                        Go back
                    </p>
                </Link>
            </div>
            <div className={styles.cont}>
                <div className={styles.box1}>
                    <img src={image} alt="" />
                </div>
            <div className={styles.box2}>
                <p><span className={styles.name}>Langavi, Based in Gauteng - Pretoria</span></p>
                <h1>Apple iPhone 16</h1>
                <h2>R17 000</h2>
                    
                <div className={styles.description}>
                    <div className={styles.desHead}>
                        <h3>Product Description</h3>
                        <span className={styles.down} onClick={() => handleClick()}>
                            {show ? (
                                <span className={styles.expandLess}>
                                    <MdExpandLess />
                                </span>
                            ) : (
                                <span className={styles.expandMore}>
                                    <FaChevronDown />
                                </span>
                            )}
                        </span>
                    </div>
                    {show ? (
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam est iste laborum, impedit consectetur quos blanditiis, iure voluptatum facere ea deleniti tempora, ratione sed modi. Veritatis nemo veniam vitae animi!</p>

                    ) : ('')}
                </div>
                <p className={styles.available}>
                            <span className={styles.note}>
                                <AiOutlineExclamationCircle />
                            </span>
                            <span className={styles.noteParagraph}>
                                I'm available during morning hours
                            </span>
                    </p>
                <div className={styles.contact}>
                    
                        <div className={styles.contacts}>
                            <div className={styles.left}>
                                <div className={styles.social}>
                                    <div className={styles.icon}>
                                        <span className={styles.icons}>
                                            <IoCallSharp  className={styles.ico}/>
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
                                        <p className={styles.contactUp}>Whatsaap</p>
                                        <p className={styles.contactBelow}>068 502 1117</p>
                                    </div>
                                </div>
                                <div className={styles.social}>
                                    <div className={styles.icon}>
                                        <span className={styles.icons}>
                                            <IoChatboxOutline />
                                        </span>
                                    </div>
                                    <div className={styles.chat}>
                                        <a href=''>Let's Chat</a>
                                    </div> 
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