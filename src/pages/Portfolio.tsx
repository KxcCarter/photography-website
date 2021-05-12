import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Gallery from '../components/Gallery/ImageGallery';
import image6 from '../images/img7.jpg';

const Portfolio: React.FC<{}> = () => {
  return (
    <div>
      <Hero image={image6} title="Portfolio" />
      <h1>Portfolio here</h1>
      <Gallery />
    </div>
  );
};

export default Portfolio;
