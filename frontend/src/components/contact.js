import React, { useState } from 'react';
import Layout from './layout';
import './styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons/faMailBulk';
import axios from 'axios';

const ContactUs = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    if (!fname || !lname || !email || !message) {
      alert('Please fill in all the required fields.');
      return;
  }
    e.preventDefault();
    setSubmitted(true);


    try {
      const response = await axios.post('http://localhost:5000/contact',{
        fname,
        lname,
        email,
        message
      })
      if(response.status === 200) {
        setSubmitted(true);
      }
    }
    catch(e) {
      console.error('Error submitting form:', e);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="contactContainer">
        <h2 className='text-center my-5'>Have Some Questions ? </h2>
        <div className='formContactControl d-flex justify-content-evenly align-items-center'>
          <div className='imgContactContainer'>
            <span className='fs'><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></span>
          </div>
          <div className='formContactContainer d-flex flex-column'>
            {submitted ? (
              <div className="success-message">Thank you! Your message has been sent.</div>
            ) : (
              <form className="contact-form d-flex flex-column" onSubmit={handleSubmit}>
                <label>
                  Fname : 
                   <input
                    type="text"
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                    required
                    placeholder='Enter First Name'
                  />
                </label>
                <label>
                  Lname :
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setlName(e.target.value)}
                    required
                    placeholder='Enter Last Name'
                  />
                </label>
                <label>
                  Email :
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder='Enter Email'
                  />
                </label>
                <label>
                  Message :
                   <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder='Enter Message'
                  />
                </label>
                <button type="submit">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;

// import { useState, useEffect } from "react";

// const ContactUs = () => {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     // Define the async function inside useEffect
//     const fetchData = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/sample');
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const sample = await res.json();
//         setMessage(sample.message || "No message received");
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setMessage("Failed to fetch data");
//       }
//     };

//     // Call the async function
//     fetchData();
//   }, []); // Empty dependency array means this runs once when the component mounts

//   return (
//     <div>
//       contact us page
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ContactUs;
