import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;

  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  /* aspect-ratio: 16/9; */
  overflow: hidden;

  .view-container {
    max-height: 700px;
  }

  .view-container img {
    max-width: 100%;
    /* height: 80%; */
    object-fit: fill;
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
  }

  @media (max-width: 600px) {
    aspect-ratio: 4/5;

    .view-container img {
      max-width: 100%;
      max-height: 100%;
    }

    .image {
      width: 100%;
      height: 100%;
    }
  }
`;
