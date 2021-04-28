import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  overflow: hidden;

  .view-container {
    /* position: absolute; */
    /* left: 50%; */
    max-height: 700px;
    /* margin: auto; */
  }

  .view-container img {
    max-width: 100%;
    /* height: 80%; */
    object-fit: fill;
    transform: translateY(-25%);
  }

  .topleft {
    position: absolute;
    top: 12px;
    left: 0;
    width: 100%;
    font-size: 1rem;
  }

  .topleft h1 {
    margin: auto;
    font-size: 2rem;
    letter-spacing: 1rem;
    color: rgba(244, 244, 244, 0.45);
  }

  .center {
    position: absolute;
    font-size: 5rem;
    letter-spacing: 0.7rem;
    font-weight: normal;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    transition: font-size 3s ease-in-out;
  }

  @media (max-width: 1024px) {
    aspect-ratio: 4/4;

    .view-container img {
      max-width: 100%;
      max-height: 100%;
    }

    .center {
      transform: translate(-50%, -90%);
      font-size: 6rem;
    }

    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 800px) {
    .topleft h1 {
      font-size: 2rem;
      letter-spacing: 0.4rem;
    }
  }

  @media (max-width: 600px) {
    aspect-ratio: 4/5;

    .view-container img {
      max-width: 100%;
      max-height: 100%;
      transform: translateY(0);
    }

    .image {
      width: 100%;
      height: 100%;
    }

    h1 {
      font-size: 1rem;
    }

    .topleft h1 {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
  }
`;
