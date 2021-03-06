import React from 'react';
import { StyledWrapper } from './ContactPageInfo.styles';
import { CgArrowLongRight } from 'react-icons/cg';

const ContactPageInfo = () => {
  return (
    <StyledWrapper>
      <div className="feature-box">
        <div className="feature">
          <h3>Wedding Pricing</h3>
          <p>Save Your Best Experiences</p>
          <CgArrowLongRight className="adornments" />
        </div>
        <div className="feature">
          <h3>Session Pricing</h3>
          <p>Express Your Personality</p>
          <CgArrowLongRight className="adornments" />
        </div>
      </div>
      <div className="description">
        <h3>Let's Capture some Memories</h3>
        <p>Based in Kansas City, Missouri</p>
        <hr />
        <p>
          Fill out the contact fields below if you are ready to book or would
          like additional information. If you are wondering about pricing, the
          links are above. I would love to discuss your ideas further. I don't
          just want to be your photographer, I want to build a lasting
          relationship with you, and capture your most treasured memories.
        </p>
      </div>
    </StyledWrapper>
  );
};

export default ContactPageInfo;
