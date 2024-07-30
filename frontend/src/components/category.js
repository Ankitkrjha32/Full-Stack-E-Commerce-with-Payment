import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt, faLaptop, faMobile, faScissors, faTshirt} from '@fortawesome/free-solid-svg-icons';
import './styles/category.css'; // Import the CSS file

function category() {
    return (
        <>
            <div className='productCategory mx-4' style={{fontFamily : "poppins"}}>
                <div className='title'>
                    <h2 className='fw-bold text-light'>Browse by Category</h2>
                </div>
                <hr/>
                <div className='category my-4' >
                    <div className='phone'>
                        <div className='phoneIcon d-flex justify-content-center flex-column align-items-center'>
                            <Link className='nav-link' to="/phones"><FontAwesomeIcon className='fs-3' icon={faMobile} /></Link>
                            <p>Phones</p>
                        </div>
                    </div>
                    <div className='camera'>
                        <div className='cameraIcon d-flex justify-content-center align-items-center'>
                            <Link className='nav-link' to="/beauty"><FontAwesomeIcon className='fs-3' icon={faScissors} /></Link>
                        </div>
                        <div className='cameraText'>
                            <p>Beauty</p>
                        </div>
                    </div>
                    <div className='Laptop'>
                        <div className='laptopIcon d-flex justify-content-center align-items-center'>
                            <Link className='nav-link' to="/laptops"><FontAwesomeIcon className='fs-3' icon={faLaptop} /></Link>
                        </div>
                        <div className='laptopText'>
                            <p >Laptops</p>
                        </div>
                    </div>
                    <div className='Motorcycle'>
                        <div className='motorcycleIcon d-flex justify-content-center align-items-center'>
                            <Link className='nav-link' to="/groceries"><FontAwesomeIcon className='fs-3' icon={faAppleAlt} /></Link>
                        </div>
                        <div className='motorcycleText'>
                            <p>Groceries</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default category
