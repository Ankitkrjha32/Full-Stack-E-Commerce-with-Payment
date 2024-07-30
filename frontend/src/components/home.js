// Home.js
import React from 'react';
import ProductCarousel from './ProductCarousel';
import Layout from './layout';
import Popular from './popular';
import Category from './category';
import './styles/home.css'; // Import the CSS file

const Home = () => {
  const images = [
    {
      src: 'carousel1.jpg',
      alt: 'First slide',
      title: 'Smartphones Summer Offer',
      description: 'The latest smartphone with advanced features and sleek design.',
    },
    {
      src: 'carousel22.jpg',
      alt: 'Second slide',
      title: 'Unleash Premium Sounds with AirPods',
      description: 'Experience premium sound quality and wireless freedom with AirPods.',
    },
    {
      src: 'carousel33.jpg',
      alt: 'Third slide',
      title: 'Stride in Style: Premium Comfort Shoes',
      description: 'Step up your style and comfort with our premium shoes.',
    },
  ];

  return (
    <Layout>
      <div className='mainHome'>
        <div className="my-5">
          <ProductCarousel images={images} />
        </div>
        <div className='popular'>
          <Popular />
        </div>
        <div className='category'>
          <Category/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
