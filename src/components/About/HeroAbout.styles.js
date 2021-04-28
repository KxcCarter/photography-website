import styled from 'styled-components';

export const StyleWrapper = styled.div`
  max-width: 100vw;
  text-align: center;
  overflow: hidden;
  padding-bottom: -20px;

  .image-container {
    position: relative;
    width: 100%;
    max-height: 90vh;
  }

  img {
    max-width: 100%;
    transform: translateY(-14%);
  }

  .info-center h1 {
    position: absolute;
    font-size: 5rem;
    letter-spacing: 0.7rem;
    font-weight: normal;
    top: 300px;
    left: 50%;
    z-index: 30;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 1100px) {
    width: 70vw;
  }
`;
