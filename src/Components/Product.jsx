import react from 'react'
import styles from './Explore.module.css'
import { Link } from 'react-router-dom' 

const Cards = ({ product }) => {


    return(
        <div className={styles.container}>
                <div className={styles.box}>
                    <div>
                        <img src={product.productImage} alt="" />
                    </div>
                    <div className={styles.info}>
                        <h3>{product.productName}</h3>
                    <Link to={`/View/${product.id}`} className={styles.link}>
                        <p><button className={styles.viewing}>View</button></p>
                    </Link>
                    </div>
                </div>
        </div>
        
    )
}

export default Cards