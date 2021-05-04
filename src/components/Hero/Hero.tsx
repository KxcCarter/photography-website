import React, { useState, useEffect } from 'react';
import { StyleWrapper } from './Hero.styles';

const Hero: React.FC<{ image: string; title: string }> = (props: {
  image: string;
  title: string;
}) => {
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
        <img src={props.image} alt="omg so moody" />
        <div className="info-center">
          <h1 className={`${cssRule} text`}>{props.title}</h1>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default Hero;
