import styles from './Explore.module.css'
import image from '../assets/images/playStation.jpeg'
import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'
import Cards from './Product'

const Explore = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProduct(){
            try{
                const res = await fetch('http://localhost:3001/posts');
                const data = await res.json();
                setProducts(data);
            }catch{
                console.log('Could not find Product', error)
            }
        }
        fetchProduct();
    }, [])


    return (
        <>
                <div className={styles.goBack}>
                    <Link to='/Index' className={styles.back}>
                        <p>
                            <span className={styles.backIcon}><IoArrowBackOutline /></span>
                            Home
                        </p>
                    </Link>
                </div>
                <div className={styles.explore}>
                    <div>
                        <h1>Browse Products</h1>
                    </div>
                        {products.map((product) =>
                        <Cards key={product.id} product={product}/>
                        )}
                </div>
        </>
    )
}

export default Explore