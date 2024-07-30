import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
import Layout from './layout';
import { useCart } from 'react-use-cart';
import './styles/mens.css'; // Import the CSS file
import { Spinner } from 'react-bootstrap';
import PopUp from './popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Womens(props) {
    const [products, setProducts] = useState([]);
    const { addItem } = useCart();
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${props.category}`)
            .then(response => response.json())
            .then(data => {
                console.log("Fetched data:", data); // Log the fetched data
                if (Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    setProducts([]);
                }
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [props.category]);

    const handleAddToCart = (product) => {
        addItem(product);
        setShowPopup(true);
    };

    // Check if products is undefined or not an array or empty
    if (!Array.isArray(products) || products.length === 0) {
        return (
            <Layout>
                <div className='d-flex justify-content-center align-items-center min-vh-100 text-light'>
                    <Spinner />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="container">
                <div className='items'>
                    {products.map(product => (
                        <div className='productCards'>
                            <div className='pimg'>
                                {product.images && product.images.length > 0 ? (
                                    <img
                                        src={product.images[0]}
                                        alt={product.title}
                                        style={{ height: "200px", width: "250px" }}
                                        className='mx-2'
                                    />
                                ) : (
                                    <div style={{ height: "200px", width: "250px", backgroundColor: "#e0e0e0" }} className='d-flex justify-content-center align-items-center'>
                                        <span>No Image</span>
                                    </div>
                                )}
                            </div>
                            <div className='ptitle'>
                                <h3 className='text-center' style={{ fontFamily: "poppins" }}>{product.title}</h3>
                            </div>
                            <div className='pprice d-flex justify-content-around'>
                                <strong><p className='text-center fs-5'>₹ {product.price}</p></strong>
                                <button className='addtocart' onClick={() => handleAddToCart(product)}>Cart <span className='cartIcon'><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></span></button>
                            </div>
                        </div>
                    ))}
                    <PopUp show={showPopup} handleClose={() => setShowPopup(false)} />
                </div>
            </div>
        </Layout>
    );
}

export default Womens;
