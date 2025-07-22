import styles from './AddProduct.module.css'
import { Link } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";


const AddProducts = () => {
    return (
        <div className={styles.cont}>
            <section>
                <div className={styles.goBack}>
                    <Link to='/Index' className={styles.back}>
                        <p>
                            <span className={styles.backIcon}><IoArrowBackOutline /></span>
                            Home
                        </p>
                    </Link>
                </div>
            <form onSubmit=''>
                <h2>Add Product</h2>
                                <label htmlFor="product">Product Name:</label><br />
                            <input required type="text" 
                            name='product'
                            id='product'
                            placeholder='Enter Product Name.'/><br />

                            <label htmlFor="price">Product Price:</label><br />
                            <input required type="text" 
                            name='price'
                            id='price'
                            placeholder='eg R1000.'/><br />

                            <label htmlFor="price">Product Image:</label><br />
                            <input className={styles.file} required type="file" 
                            name='image'
                            id='image'
                            /><br />

                            <label htmlFor="description">Product Description:</label><br />
                            <textarea 
                            required
                            name='price'
                            id='price'
                            placeholder='A short description about your product.'/>
                    <label htmlFor="location">Location:</label><br />
                    <input required type="text"
                    name='location'
                    id='location'
                    placeholder='Province & nearest Town/City.'/><br />
                    
                    <label htmlFor="availability">Availability:</label><br />
                    <select required name="availability" id="availability">
                        <option selected value="Mornings">Mornings</option>
                        <option value="Afternoons">Afternoons</option>
                        <option value="Evenings">Evenings</option>
                    </select><br />

                    <label htmlFor="phone">Phone No:</label><br />
                    <input required type="tel"
                    name='phone'
                    id='phone'
                    placeholder='555-555-5555'/><br />

                    <label htmlFor="whatsaap">Whatsaap No:</label><br />
                    <input required type="tel"
                    name='whatsapp'
                    id='whatsapp'
                    placeholder='555-555-5555'/><br />

                    <label htmlFor="email">Email:</label><br />
                    <input required type="email"
                    name='email'
                    id='email'
                    placeholder='example@gmail.com'/><br />

                    <button>Submit</button>
            </form>
            </section>
        </div>
    )
}

export default AddProducts