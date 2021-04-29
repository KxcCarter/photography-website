import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  text-align: center;
  overflow: hidden;
  padding-bottom: -20px;
  .view-container {
    position: relative;
    width: 100%;
    height: 700px;
  }
  .slide {
    opacity: 0;
    transform: scale(1.25);
    transition-duration: 2s ease-in-out;
  }
  .active {
    opacity: 1;
    transform: scale(1);
    transition-duration: 2s;
    transition-timing-function: ease-in-out;
  }
  .view-container img {
    max-width: 100%;
    transform: translateY(-25%);
  }
  /* TEXT */
  .info-center h1 {
    position: absolute;
    font-size: 5rem;
    letter-spacing: 0.7rem;
    font-weight: normal;
    top: 450px;
    left: 50%;
    z-index: 30;
    transform: translate(-50%, -50%);
  }
  /* NAVIGATION */
  .arrow {
    position: absolute;
    z-index: 101;
    top: 75%;
    font-size: 2.5rem;
    opacity: 50%;
    cursor: pointer;
    user-select: none;
  }
  .arrow:hover {
    box-shadow: 1px 2px 3px rgba(10, 10, 10, 0.4);
    border-radius: 50%;
    color: rgba(210, 210, 210, 0.9);
  }
  .arrow-left {
    left: 16px;
  }
  .arrow-right {
    right: 16px;
  }
  /* MEDIA QUERIES */
  @media (max-width: 1024px) {
    aspect-ratio: 4/4;
    .view-container img {
      max-height: 100%;
      transform: translateY(-10%);
    }
    .info-center {
      /* transform: translateY(-50%); */
      /* font-size: 6rem; */
      top: 300px;
    }
    h1 {
      font-size: 3rem;
    }
  }
  @media (max-width: 800px) {
    .arrow {
      font-size: 2rem;
    }
  }
  @media (max-width: 600px) {
    aspect-ratio: 3/4;
    .view-container img {
      max-height: 100%;
      transform: translateY(0);
    }
    /* Not sure if I need a rule for .image and img */
    .image {
      width: 100%;
      height: 100%;
    }
    h1 {
      font-size: 1rem;
    }
    .info-center h1 {
      font-size: 2rem;
      top: 50%;
    }
    .arrow {
      font-size: 1.6rem;
      top: 50%;
    }
  }
`;
