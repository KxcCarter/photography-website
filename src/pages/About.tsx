import React from 'react';
import LandingAbout from '../components/Landing/LandingAbout';
import profile1 from '../images/profile1.jpg';
import Hero from '../components/Hero/Hero';

const About: React.FC = () => {
  return (
    <div>
      <Hero image={profile1} title="About Me" />

      <LandingAbout />
    </div>
  );
};

export default About;
