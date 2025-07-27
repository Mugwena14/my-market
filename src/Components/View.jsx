import styles from './View.module.css'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoChatboxOutline } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { MdExpandLess } from "react-icons/md";
import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import { CiLocationOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

// Firebase
import { db } from '../config/firebase'
import { doc, onSnapshot } from 'firebase/firestore';

const View = () => {

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    function handleClick(){
        setShow(prevState => !prevState)
    }

    useEffect(() => {
        const productRef = doc(db, 'products', id);
        const unsub = onSnapshot(productRef, (snapshot) => {
            if(snapshot.exists()){
                setProduct(snapshot.data());
            } else {
                console.error('Product not found');
            }
            setLoading(false);
        });

        return () => unsub();
    }, [id])


    return (
        <>
            {loading ? <Spinner /> : (
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
                            <img src={product.productImage} alt="IMG" />
                        </div>
                        <div className={styles.box2}>
                            <p><span className={styles.name}>
                                <span className={styles.boldName1}><CiUser className={styles.user} /> {product.name}</span>
                                , Based in -<span className={styles.boldName2}><CiLocationOn className={styles.locate} /> {product.location}</span>
                                </span>
                            </p>
                            <h1>{product.productName}</h1>
                            <h2 className={styles.price}>{product.productPrice}</h2>
                                
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

                                    <p className={styles.descriptionText}>{product.productDescription}.</p>
                                ) : ('')}
                            </div>
                            <p className={styles.available}>
                                        <span className={styles.note}>
                                            <AiOutlineExclamationCircle />
                                        </span>
                                        <span className={styles.noteParagraph}>
                                            I'm available during <span className={styles.time}>{product.availability}.</span>
                                        Let's connect:
                                        </span>
                                </p>
                            <div className={styles.contact}>
                                
                                    <div className={styles.contacts}>
                                        <div className={styles.left}>
                                            <div className={styles.social}>
                                                <div className={styles.icon}>
                                                    <span className={styles.icons}>
                                                        <IoCallSharp  className={styles.calls}/>
                                                    </span>
                                                </div>
                                                <div className={styles.info}>
                                                    <p className={styles.contactUp}>Calls</p>
                                                    <Link to={`tel:${product.phoneNo}`} className={styles.lookout}>
                                                        <p className={styles.contactBelow}>{product.phoneNo}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className={styles.social}>
                                                <div className={styles.icon}>
                                                    <span className={styles.icons}>
                                                        <MdEmail  className={styles.email}/>
                                                    </span>
                                                </div>
                                                <div className={styles.info}>
                                                    <p className={styles.contactUp}>Email</p>
                                                    <Link to={`mailto:${product.email}`} className={styles.lookout}>
                                                        <p className={styles.contactBelow}>{product.email}</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.right}>
                                            <div className={styles.whats}>
                                                <div className={styles.social}>
                                                    <div className={styles.icon}>
                                                        <span className={styles.icons}>
                                                            <FaWhatsapp className={styles.whatsaap} />
                                                        </span>
                                                    </div>
                                                    <div className={styles.info}>
                                                        <p className={styles.contactUp}>Whatsaap</p>
                                                        <Link to={`https://wa.me/${product.whatsaapNo}?text=Hi%20there,%20just%20saw%20your%20product%20from%20LoopKart.%20Mind%20telling%20me%20more%20about%20it?`} className={styles.lookout}>
                                                            <p className={styles.contactBelow}>{product.whatsaapNo}</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default View
