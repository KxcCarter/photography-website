import React, { useState } from 'react';
import { Wrapper } from './HeroSlider.styles';

import photo1 from '../images/image1.jpg';
import photo2 from '../images/image2.jpg';
import photo3 from '../images/image3.jpg';
import photo4 from '../images/image4.jpg';
import photo5 from '../images/image5.jpg';

const IMAGES = [
  { img: photo1, altText: 'Style' },
  { img: photo2, altText: 'Class' },
  { img: photo3, altText: 'Elegance' },
  { img: photo4, altText: 'Intensity' },
  { img: photo5, altText: 'Sophistication' },
];

const HeroSlider = (props) => {
  const renderedImages = IMAGES.map((item, index) => (
    <div className="slide" key={index}>
      <img className="image" src={item.img} alt={item.altText} />
      <div className="info-center">
        <h1>{item.altText}</h1>
      </div>
    </div>
  ));

  //   const manualNav = (manual) => {
  //     renderedImages[manual];
  //   };

  const NavButtons = () => {
    const [activeClass, setActiveClass] = useState('');
    return (
      <div
        className={`navBtn ${activeClass}`}
        onClick={() => setActiveClass('active')}
      ></div>
    );
  };

  const navButtons = IMAGES.map((item, index) => <NavButtons />);

  return (
    <Wrapper>
      <div className="view-container">
        <div className="title-center">
          <h1>H. Raymond Carter Photography</h1>
        </div>

        {renderedImages}

        {/* <div className="slide">
          <img className="image" src={photo1} alt="Victor Portrait" />
          <div className="info-center">
            <h1>Style</h1>
          </div>
        </div> */}

        <div className="navigation">
          {/* <div className="navBtn"></div>
          <div className="navBtn"></div>
          <div className="navBtn"></div>
          <div className="navBtn"></div>
          <div className="navBtn"></div> */}

          {navButtons}
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSlider;
