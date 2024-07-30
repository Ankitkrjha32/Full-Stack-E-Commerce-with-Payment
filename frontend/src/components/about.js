// About.js
import React from 'react';
import './styles/about.css';
import Layout from './layout';

const About = () => (
  <div>
    <Layout>
      <div className='aboutContainer my-4 d-flex justify-content-center align-items-center'>
        <div className='heroAbout d-flex justify-content-center align-items-center flex-column'>
          <div className='titleArea'>
            <h1>Who We Are</h1>
            <hr />
          </div>
          <div className='textArea'>
            <p>Welcome to SharpStore, your one-stop destination for a seamless and enjoyable online shopping experience. We are a passionate team of e-commerce enthusiasts dedicated to bringing you a wide variety of high-quality products at unbeatable prices. Our mission is to provide a convenient, reliable, and enjoyable shopping experience for every customer.</p>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default About;
