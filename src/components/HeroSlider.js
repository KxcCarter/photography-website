import React from 'react';
import { Wrapper } from './HeroSlider.styles';
import photo from '../images/image5.jpg';

const HeroSlider = (props) => {
  return (
    <Wrapper>
      <div className="view-container">
        <img className="image" src={photo} alt="Victor Portrait" />
        <div class="center">
          <h1>Style</h1>
        </div>
        <div class="topleft">
          <h1>H. Raymond Carter Photography</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
