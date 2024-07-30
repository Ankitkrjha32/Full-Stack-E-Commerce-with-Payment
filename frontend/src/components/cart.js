import React, { useContext } from 'react';
import { useCart } from 'react-use-cart';
import Layout from './layout';
import './styles/cart.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

const Cart = () => {
    const {
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleBuy = (e,item) => {
        if (!user) {
            e.preventDefault();
            navigate('/signup');
        } else {
            navigate('/buy');
            // navigate('/buy', { state: { price: item.price } });
            // console.log(item.price);
            
        }
    };

    if (isEmpty) {
        return (
            <Layout>
                <div className='containerCart'>
                    <div className='emptyCart'>
                        <h2>Your Cart is Empty</h2>
                        <FontAwesomeIcon className='fs-1' icon={faCartArrowDown}></FontAwesomeIcon>
                        <p>Please add some items to your cart.</p>
                        <Link className='hlink' to="/">Return to Home</Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className='container my-4'>
                <div className='hero'>
                    <div className='titles'>
                        <h4>Products</h4>
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Remove</h4>
                        <h4>Buy</h4>
                    </div>
                    <div className='row'>
                        {items.map((item) => (
                            <div className='cart-item' key={item.id}>
                                <div className='img'>
                                    {item.images && item.images.length > 0 ? (
                                        <img
                                            src={item.images[0]}
                                            alt={item.title}
                                            className='mx-2'
                                        />
                                    ) : (
                                        <div style={{ height: "80px", width: "80px", backgroundColor: "#e0e0e0" }} className='d-flex justify-content-center align-items-center'>
                                            <span>No Image</span>
                                        </div>
                                    )}
                                </div>
                                <div className='price'>
                                    <p>₹ {item.price}</p>
                                </div>
                                <div className='quantity'>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                                    <span> {item.quantity} </span>
                                    <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                                </div>
                                <div className='remove'>
                                    <button onClick={() => removeItem(item.id)}>Remove Item</button>
                                </div>
                                <div className='buy'>
                                    <Link to="/buy" onClick={(e) => handleBuy(e,item)} className='link'>Buy</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='carttotal'>
                    <div className='cart-footer'>
                        <h2>Cart Total</h2>
                        <h3>Total: ₹ {cartTotal.toFixed(2)}</h3>
                        <button onClick={emptyCart}>Empty Cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
