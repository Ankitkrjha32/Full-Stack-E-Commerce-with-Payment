import React, { useContext, useState } from 'react';
import axios from 'axios';
import { UserContext } from './UserContext';
import Layout from './layout';
import { useLocation } from 'react-router-dom';
import './styles/buy.css';

const CheckoutForm = () => {
    const { user } = useContext(UserContext);
    const location = useLocation();
    const price = location.state ? location.state.price : 0;

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('online');
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    const handlePayment = async () => {
        if (!address || !city || !state || !zip) {
            alert('Please fill in all the required fields.');
            return;
        }

        if (paymentCompleted) {
            alert('Checkout is already completed.');
            return;
        }

        if (paymentMethod === 'cod') {
            try {
                const response = await axios.post('http://localhost:5000/checkout', {
                    address,
                    city,
                    state,
                    zip,
                    paymentMethod,
                    paymentCompleted : true
                });
                if (response.status === 201) {
                    setPaymentCompleted(true);
                    alert('Order placed successfully! Payment will be collected on delivery.');
                }
            } catch (error) {
                console.error('Error saving checkout data:', error);
                alert('Failed to place order. Please try again.');
            }
            return;
        }

        try {
            console.log('Creating order with amount:', price * 100); // For Debugging

            const order = await axios.post('http://localhost:5000/buy', { amount: 1000 });
            console.log('Order created:', order);

            const options = {
                key: 'rzp_test_znYZ029eSbyTDf',
                amount: order.data.amount,
                currency: 'INR',
                name: 'SharpStore',
                description: 'Test Transaction',
                order_id: order.data.id,
                handler: async function (response) {
                    alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                    setPaymentCompleted(true);

                    try {
                        const checkoutResponse = await axios.post('http://localhost:5000/checkout', {
                            address,
                            city,
                            state,
                            zip,
                            paymentMethod,
                            price,
                            paymentCompleted: true
                        });
                        if (checkoutResponse.status === 201) {
                            alert('Order placed successfully!');
                        }
                    } catch (error) {
                        console.error('Error saving checkout data:', error);
                        alert('Failed to save order details. Please contact support.');
                    }
                },
                prefill: {
                    name: user ? user.username : 'Guest',
                    email: user ? user.email : 'guest@example.com',
                    contact: '9999999999'
                },
                theme: {
                    color: '#3399cc'
                }
            };

            const rzp = new window.Razorpay(options);
            rzp.open();
        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed. Please try again.');
        }
    };

    return (
        <div className="checkout-container my-5">
            <form className="checkout-form">
                <h2>Shipping Address</h2>
                <label>
                    Address:
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </label>
                <label>
                    City:
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    State:
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                    />
                </label>
                <label>
                    ZIP Code:
                    <input
                        type="text"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        required
                    />
                </label>
                <h2>Payment Method</h2>
                <label className='text-center d-flex justify-content-center flex-row'>
                    <input
                        type="radio"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className='mx-3'
                    />
                    Online Payment
                </label>
                <label className='text-center d-flex justify-content-center flex-row'>
                    <input
                        type="radio"
                        value="cod"
                        checked={paymentMethod === 'cod'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className='mx-3'
                    />
                    Cash on Delivery
                </label>
                <button type="button" onClick={handlePayment}>Place Order</button>
            </form>
        </div>
    );
};

const Buy = () => {
    return (
        <Layout>
            <CheckoutForm />
        </Layout>
    );
};

export default Buy;
