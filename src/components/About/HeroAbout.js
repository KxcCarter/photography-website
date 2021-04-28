import React from 'react';
import profile1 from '../../images/profile1.jpg';
import { StyleWrapper } from './HeroAbout.styles';

const HeroAbout = () => {
  return (
    <StyleWrapper>
      <div className="image-container">
        <img src={profile1} alt="omg so moody" />
        <div className="info-center">
          <h1>About Me</h1>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default HeroAbout;
