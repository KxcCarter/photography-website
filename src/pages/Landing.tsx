import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import LandingAbout from '../components/Landing/LandingAbout';

const Landing: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <LandingAbout />
    </div>
  );
};

export default Landing;
