import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import LandingAbout from '../components/Landing/LandingAbout';

const Landing = (props) => {
  return (
    <div>
      <HeroSlider />
      <LandingAbout />
    </div>
  );
};

export default Landing;
