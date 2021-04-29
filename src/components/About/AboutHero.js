import React, { useState, useEffect } from 'react';
import profile1 from '../../images/profile1.jpg';
import { StyleWrapper } from './AboutHero.styles';

const AboutHero = () => {
  const [cssRule, setCssRule] = useState('');

  useEffect(() => {
    animate();
  });

  const animate = () => {
    setCssRule('animate');
  };

  return (
    <StyleWrapper>
      <div className={`image-container ${cssRule}`}>
        <img src={profile1} alt="omg so moody" />
        <div className="info-center">
          <h1 className={`${cssRule}`}>About Me</h1>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default AboutHero;
