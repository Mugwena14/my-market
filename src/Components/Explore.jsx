import styles from './Explore.module.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import Cards from './Product';
import Spinner from './Spinner';

import { db } from '../config/firebase'; // adjust if path differs
import { collection, onSnapshot } from 'firebase/firestore';

const Explore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsRef = collection(db, 'products');
    const unsub = onSnapshot(productsRef, (snapshot) => {
      const fetched = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProducts(fetched);
      setLoading(false); // ⬅️ don't forget this!
    });

    return () => unsub(); // cleanup listener
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className={styles.this}>
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
            <div className={styles.product}>
              {products.map((product) => (
                <Cards key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;
