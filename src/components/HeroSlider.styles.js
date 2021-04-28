import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;

  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25); */
  text-align: center;
  overflow: hidden;

  /* In video this is equivalent to .img-slider - aka the outer div */
  .view-container {
    /* Uncomment these to return to my styles */
    /* max-height: 700px; */

    /* Additions from video below */

    position: relative;
    width: 100%;
    height: 700px;
    /* margin: 10px; */
  }

  /* This entire rule is from the video */
  .view-container .slide {
    z-index: 10;
    position: absolute;
    width: 100%;
  }
  /* This entire rule is from the video */
  /* This seems to only be for applying rounded edges, which I don't want */
  .view-container .slide img {
    z-index: 10;
    width: 100%;
    border-radius: 5px;
  }

  /* These are my rules */
  .view-container img {
    /* max-width: 100%; */
    /* object-fit: fill; */
    transform: translateY(-25%);
  }

  /* I probably don't need this */
  .view-container .slide .info-center {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  /* This entire rule is from the video */
  .view-container .navigation {
    z-index: 20;
    position: absolute;
    display: flex;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
  }
  /* This entire rule is from the video */
  .view-container .navigation .navBtn {
    background: rgba(255, 255, 255, 0.9);
    width: 12px;
    height: 12px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
  }

  /* MY STYLES */
  /* Don't touch these*/
  .title-center {
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    font-size: 1rem;
    z-index: 30;
  }

  .title-center h1 {
    margin: auto;
    font-size: 2rem;
    letter-spacing: 1rem;
    color: rgba(244, 244, 244, 0.45);
  }

  .info-center {
    position: absolute;
    font-size: 5rem;
    letter-spacing: 0.7rem;
    font-weight: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: font-size 3s ease-in-out;
    background: rgba(0, 0, 0, 0.1);
  }

  .arrow {
    position: absolute;
    z-index: 101;
    top: 50%;
    font-size: 3rem;
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
    }

    .info-center {
      transform: translate(-50%, -90%);
      font-size: 6rem;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    .title-center h1 {
      font-size: 2rem;
      letter-spacing: 0.4rem;
    }
  }

  @media (max-width: 600px) {
    aspect-ratio: 4/5;

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

    .title-center h1 {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
  }
`;
