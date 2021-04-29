import React from 'react';
import Hero from '../components/Hero/Hero';
import LandingAbout from '../components/Landing/LandingAbout';
import profile1 from '../images/profile1.jpg';

const About = (props) => {
  return (
    <div>
      <Hero image={profile1} title="About Me" />

      <LandingAbout />
    </div>
  );
};

export default About;
