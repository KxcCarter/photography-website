import React from 'react';
import Hero from '../components/Hero/Hero';
import image1 from '../images/image1.jpg';

const Portfolio = () => {
  return (
    <div>
      <Hero image={image1} title="Portfolio" />
      <h1>Portfolio here</h1>
    </div>
  );
};

export default Portfolio;
