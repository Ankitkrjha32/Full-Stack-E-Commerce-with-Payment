import React from 'react'
import './styles/footer.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footerSection h-100' style={{fontFamily : "poppins"}}>
      <footer className='d-flex justify-content-evenly align-items-center flex-row py-4'>
        <div className='sharpstore d-flex flex-column align-items-center text-center'>
          <div className='title' >
            <h2 className='fw-bold'>Sharp Store</h2>
          </div>
          <div className='description'>
            <p>Your trusted online
              store for quality 
              product and seamless 
              shopping
            </p>
          </div>
        </div>
        <div className='company d-flex flex-column align-items-center text-center'>
          <div className='title' >
            <h2 className='fw-bold'>Company</h2>
          </div>
          <div className='des d-flex flex-column'>
            <Link className='text-decoration-none text-light'>About Us</Link>
            <Link className='text-decoration-none text-light'>Privacy Policy</Link>
            <Link className='text-decoration-none text-light'>Terms & Conditions</Link>
            <Link className='text-decoration-none text-light'>Login</Link>
          </div>
        </div>
        <div className='contact d-flex flex-column align-items-center text-center'>
          <div className='title' >
            <h2 className='fw-bold'>Contact</h2>
          </div>
          <div className='des d-flex flex-column'>
            <a href='#' className='text-decoration-none text-light'>Linkedin</a>
            <a href='#' className='text-decoration-none text-light'>Twitter</a>
            <a href='#' className='text-decoration-none text-light'>Email</a>
            <a href='#' className='text-decoration-none text-light'>Facebook</a>
          </div>
        </div>
        <div className='techsupport d-flex flex-column align-items-center text-center'>
          <div className='title' >
            <h2 className='fw-bold' >Tech Support</h2>
          </div>
          <div className='des d-flex flex-column'>
            <Link className='text-decoration-none text-light'>Contact Support</Link>
            <Link className='text-decoration-none text-light'>Info Center</Link>
            <Link className='text-decoration-none text-light'>Activate</Link>
          </div>
        </div>
      </footer>
      <div className='copyright text-center my-2 p-3 bg-black text-light'>
        <span className='fw-bold'>&copy;Sharp Store</span><span>-All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Footer


