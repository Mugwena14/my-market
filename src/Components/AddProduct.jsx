import styles from './AddProduct.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBackOutline } from "react-icons/io5";
import { useState } from 'react';
import { db, storage } from '../config/firebase'; // update path if needed
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProducts = ({ onSubmitForm }) => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null); // file object
  const [productDescription, setProductDescription] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [whatsaapNo, setWhatsaapNo] = useState('');
  const [email, setEmail] = useState('');

  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
      toast.success('Adding product...');
    e.preventDefault();

    try {
      let imageUrl = '';

      if (productImage) {
        const imageRef = ref(storage, `LoopKartImages/${productImage.name}`);
        const snapshot = await uploadBytes(imageRef, productImage);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      const productData = {
        productName,
        productPrice,
        productImage: imageUrl,
        productDescription,
        name,
        location,
        availability,
        phoneNo,
        whatsaapNo,
        email,
      };

      await addDoc(collection(db, 'products'), productData);
      onSubmitForm?.(productData);
      toast.success('Re-directing');
      navigate('/Explore');
    } catch (error) {
      console.error("🔥 Error uploading product:", error);
    }
  };

  return (
    <div className={styles.cont}>
      <section>
        <ToastContainer className={styles.toast}/>
        <div className={styles.goBack}>
          <Link to='/Index' className={styles.back}>
            <p>
              <span className={styles.backIcon}><IoArrowBackOutline /></span>
              Home
            </p>
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Add Product</h2>

          <label htmlFor="product">Product Name:</label><br />
          <input required type="text" value={productName} onChange={(e) => setProductName(e.target.value)} name='product' id='product' placeholder='Enter Product Name.'/><br />

          <label htmlFor="price">Product Price:</label><br />
          <input required type="text" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} name='price' id='price' placeholder='eg R1000.'/><br />

          <label htmlFor="image">Product Image:</label><br />
          <input className={styles.file} required type="file" onChange={(e) => setProductImage(e.target.files[0])} name='image' id='image' /><br />

          <label htmlFor="description">Product Description:</label><br />
          <textarea required value={productDescription} onChange={(e) => setProductDescription(e.target.value)} name='description' id='description' placeholder='A short description about your product.'/>

          <label htmlFor="name">Your Name:</label><br />
          <input required type="text" value={name} onChange={(e) => setName(e.target.value)} name='name' id='name' placeholder='First Name Only'/><br />

          <label htmlFor="location">Location:</label><br />
          <input required type="text" value={location} onChange={(e) => setLocation(e.target.value)} name='location' id='location' placeholder='Province & nearest Town/City.'/><br />

          <label htmlFor="availability">Availability:</label><br />
          <select required value={availability} onChange={(e) => setAvailability(e.target.value)} name="availability" id="availability">
            <option value="">Choose your cup of tea.</option>
            <option value="Mornings">Mornings</option>
            <option value="Afternoons">Afternoons</option>
            <option value="Evenings">Evenings</option>
          </select><br />

          <label htmlFor="phone">Phone No:</label><br />
          <input required type="tel" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} name='phone' id='phone' placeholder='555-555-5555'/><br />

          <label htmlFor="whatsapp">Whatsaap No:</label><br />
          <input required type="tel" value={whatsaapNo} onChange={(e) => setWhatsaapNo(e.target.value)} name='whatsapp' id='whatsapp' placeholder='555-555-5555'/><br />

          <label htmlFor="email">Email:</label><br />
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} name='email' id='email' placeholder='example@gmail.com'/><br />

          <button>Submit</button>
        </form>
      </section>
    </div>
  );
}

export default AddProducts;
