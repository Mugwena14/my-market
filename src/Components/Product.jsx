import react from 'react'
import styles from './Explore.module.css'
import { Link } from 'react-router-dom' 

const Cards = ({ product }) => {
    return(
        <div className={styles.container}>
            <Link to={`/View/${product.id}`} className={styles.link}>
                <div className={styles.box}>
                    <img src={product.productImage} alt="" />
                    <div className={styles.info}>
                        <h3>{product.productName}</h3>
                        <p>{product.name}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Cards