import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  /* background: #121212; */
  border-radius: 10px;
  border: 2px solid #0085a3;
  /* get rid of border  */
  color: #f4f4f4;
  padding: 40px 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    /* font-size: 0.8rem;
    font-weight: lighter;
    line-height: 1.85rem;
    color: #f4f4f4; */
  }

  .about {
    width: 70vw;
    height: 90vh;
    margin: auto;
  }

  @media (max-width: 700px) {
    .about {
      width: 80%;
    }
  }

  @media (max-width: 550px) {
    /* aspect-ratio: 4/5; */

    .about {
      width: 95%;
    }
  }
`;
