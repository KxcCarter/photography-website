import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 2px;
  /* remove padding, probably */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  aspect-ratio: 16/9;

  p {
    font-size: 1rem;
  }

  .view-container {
    width: 100vw;
    height: 90vh;
    background-color: blanchedalmond;
    overflow: hidden;
  }

  .view-container img {
    max-width: 100%;
    /* max-height: 100%; */
    /* object-fit: contain; */
  }

  @media (max-width: 550px) {
    aspect-ratio: 4/5;

    .image {
      width: 100%;
      height: auto;
    }
  }
`;
