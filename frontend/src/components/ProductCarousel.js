import React from 'react'
import './styles/productcarousel.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

function ProductCarousel() {
    return (
        <div className='container1'>
            <div className='hero1 my-4 d-flex justify-content-evenly'>
                <div className='textbox1 text-light'>
                    <h1>SHARPSTORE </h1>
                    <h3 className='ml-5'>DISCOVER </h3><span>AMAZING DEALS</span>
                    <div className='allpro'>
                        <p>
                            Sharp Store is your premier online marketplace, offering a wide range of products <br></br>with unbeatable convenience, competitive pricing, and exceptional service.
                        </p>
                    </div>
                    <div className='btns'>
                        <Link className='men text-center ' to="/mens">Mens <span className='micon'><FontAwesomeIcon icon={faMars}></FontAwesomeIcon></span></Link>
                        <Link className='women text-center' to="/womens">Womens <span className='ficon'><FontAwesomeIcon icon={faVenus}></FontAwesomeIcon></span></Link>
                    </div>
                </div>
                <div className='imagebox1 '>
                    <img className='imglp' src='ecm7remove.png'></img>
                </div>
            </div>
        </div>
    )
}

export default ProductCarousel
