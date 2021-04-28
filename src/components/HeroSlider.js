import React from 'react';
import { Wrapper } from './HeroSlider.styles';
import photo1 from '../images/image1.jpg';
import photo2 from '../images/image2.jpg';
import photo3 from '../images/image3.jpg';
import photo4 from '../images/image4.jpg';
import photo5 from '../images/image5.jpg';

const IMAGES = [photo1, photo2, photo3, photo4, photo5];

const renderedImages = IMAGES.map((image, index) => (
  <img
    className="image"
    src={image}
    alt="I took these photos and you should be impressed."
  />
));

const HeroSlider = (props) => {
  return (
    <Wrapper>
      <div className="view-container">
        <div className="slide"></div>
        <img className="image" src={photo1} alt="Victor Portrait" />
        <div class="center">
          <h1>Style</h1>
        </div>
        {/* rename this class \/ */}
        <div class="topleft">
          <h1>H. Raymond Carter Photography</h1>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
