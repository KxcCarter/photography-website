import React from 'react';
import { Wrapper } from './HeroSlider.styles';
import photo from '../images/image1.jpg';

const HeroSlider = (props) => {
  return (
    <Wrapper>
      <div className="view-container">
        <img className="image" src={photo} alt="it is a thing of me" />
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
