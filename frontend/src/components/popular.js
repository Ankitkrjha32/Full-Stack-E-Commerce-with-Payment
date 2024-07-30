// // Popular.js
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './styles/popular.css'; // Import the CSS file
// import { useCart } from 'react-use-cart';
// import PopUp from './popup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

// function Popular() {
//   const [products, setProducts] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const { addItem } = useCart();

//   useEffect(() => {
//     fetch('https://dummyjson.com/products?skip=90')
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products.slice(0,9)))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   const handleAddToCart = (product) => {
//     addItem(product);
//     setShowPopup(true);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: true,
//   };

//   return (
//     <div className='my-4 popularContainer'>
//       <div className='title mx-4'>
//         <strong><h2 className='fw-bold text-light' style={{ fontFamily: "Poppins" }}>Today's Popular Products</h2></strong>
//         <hr />
//       </div>

//       {products.length > 0 && (
//         <div className="slider-container my-4 mx-4">
//           <Slider {...settings} className='plist'>
//             {products.map((product) => (
//               <div key={product.id} className='p-4 d-flex flex-wrap flex-column justify-content-center align-items-center' style={{ height: "200px", width: "300px" }}>
//                 {product.images && product.images.length > 0 ? (
//                   <img
//                     src={product.images[0]}
//                     alt={product.title}
//                     style={{ height: "200px", width: "250px" }}
//                     className='mx-2'
//                   />
//                 ) : (
//                   <div style={{ height: "200px", width: "250px", backgroundColor: "#e0e0e0" }} className='d-flex justify-content-center align-items-center'>
//                     <span>No Image</span>
//                   </div>
//                 )}
//                 <p className='fs-5 text-center fw-bold mx-2 text-light' style={{ fontFamily: "poppins" }}>{product.title}</p>
//                 <div className='d-flex justify-content-between align-items-center w-50'>
//                   <p className='text-center fs-5 fw-bold text-light price'>₹ {product.price}</p>
//                   <button className='addtocart' onClick={() => handleAddToCart(product)}>Cart <span className='cartIcon'><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></span></button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <PopUp show={showPopup} handleClose={() => setShowPopup(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Popular;


// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './styles/popular.css'; // Import the CSS file
// import { useCart } from 'react-use-cart';
// import PopUp from './popup';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

// function Popular() {
//   const [products, setProducts] = useState([]);
//   const [showPopup, setShowPopup] = useState(false);
//   const { addItem } = useCart();

//   useEffect(() => {
//     fetch('https://dummyjson.com/products?skip=90')
//       .then((response) => response.json())
//       .then((data) => setProducts(data.products.slice(0,9)))
//       .catch((error) => console.error('Error fetching products:', error));
//   }, []);

//   const handleAddToCart = (product) => {
//     addItem(product);
//     setShowPopup(true);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className='my-4 popularContainer'>
//       <div className='title mx-4'>
//         <strong><h2 className='fw-bold text-light' style={{ fontFamily: "Poppins" }}>Today's Popular Products</h2></strong>
//         <hr />
//       </div>

//       {products.length > 0 && (
//         <div className="slider-container my-4 mx-4">
//           <Slider {...settings} className='plist'>
//             {products.map((product) => (
//               <div key={product.id} className='p-4 d-flex flex-wrap flex-column justify-content-center align-items-center' style={{ height: "300px", width: "100%" }}>
//                 {product.images && product.images.length > 0 ? (
//                   <img
//                     src={product.images[0]}
//                     alt={product.title}
//                     style={{ height: "200px", width: "100%", objectFit: "cover" }}
//                     className='mx-2'
//                   />
//                 ) : (
//                   <div style={{ height: "200px", width: "100%", backgroundColor: "#e0e0e0" }} className='d-flex justify-content-center align-items-center'>
//                     <span>No Image</span>
//                   </div>
//                 )}
//                 <p className='fs-5 text-center fw-bold mx-2 text-light pTitle' style={{ fontFamily: "poppins" }}>{product.title}</p>
//                 <div className='d-flex justify-content-between align-items-center w-100 priceCart'>
//                   <p className='text-center fw-bold text-light price'>₹ {product.price}</p>
//                   <button className='addtocart' onClick={() => handleAddToCart(product)}>Cart <span className='cartIcon'><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></span></button>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//           <PopUp show={showPopup} handleClose={() => setShowPopup(false)} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Popular;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/popular.css'; // Correct path to your CSS file
import { useCart } from 'react-use-cart';
import PopUp from './popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

function Popular() {
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    fetch('https://dummyjson.com/products?skip=90')
      .then((response) => response.json())
      .then((data) => setProducts(data.products.slice(0, 9)))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    addItem(product);
    setShowPopup(true);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='my-4 popularContainer'>
      <div className='title mx-4'>
        <strong><h2 className='fw-bold text-light' style={{ fontFamily: "Poppins" }}>Today's Popular Products</h2></strong>
        <hr />
      </div>

      {products.length > 0 && (
        <div className="slider-container my-4 mx-4">
          <Slider {...settings} className='plist'>
            {products.map((product) => (
              <div key={product.id} className='p-4 d-flex flex-wrap flex-column justify-content-center align-items-center product-card'>
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className='product-image'
                  />
                ) : (
                  <div className='no-image'>
                    <span>No Image</span>
                  </div>
                )}
                <p className='fs-5 text-center fw-bold mx-2 text-light' style={{ fontFamily: "poppins" }}>{product.title}</p>
                <div className='d-flex justify-content-between align-items-center w-100 priceCart'>
                  <p className='text-center fw-bold text-light price'>₹ {product.price}</p>
                  <button className='addtocart' onClick={() => handleAddToCart(product)}>Cart <span className='cartIcon'><FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></span></button>
                </div>
              </div>
            ))}
          </Slider>
          <PopUp show={showPopup} handleClose={() => setShowPopup(false)} />
        </div>
      )}
    </div>
  );
}

export default Popular;
