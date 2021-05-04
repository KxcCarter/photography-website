import styled from 'styled-components';

export const StyleWrapper = styled.div`
  max-width: 100vw;
  max-height: 1200px;
  text-align: center;
  overflow: hidden;
  /* padding-bottom: -20px;
  margin-bottom: -20px; */

  .image-container {
    position: relative;
    width: 100%;
    height: 70vh;
    max-height: 1200px;
    transform: scale(1.05);
  }

  .animate {
    /* font-size: 4.5rem; */
    transform: scale(1);
    transition: transform 2s ease-in-out;
  }

  .animate h1 {
    /* font-size: 4.5rem; */
    font-weight: bolder;
    transition: all 2s ease-in-out;
  }

  img {
    max-width: 100%;
    transform: translateY(-14%);
  }

  .info-center h1 {
    position: absolute;
    width: 100%;
    /* font-size: 7rem; */
    letter-spacing: 0.7rem;
    font-weight: normal;
    top: 300px;
    left: 50%;
    z-index: 30;

    transform: translateX(-50%);

    /* transform: translate(-50%, -50%); */
    /* transform: scale(1); */
  }

  @media (min-width: 1100px) {
    width: 75vw;
    margin: auto;
  }

  @media (max-width: 500px) {
    width: 100vw;

    .image-container {
      height: 50vh;
    }

    img {
      transform: translateY(-5%);
    }

    h1 {
      font-size: 2rem;
    }

    .animate {
      font-size: 1.75rem;
    }
  }
`;
