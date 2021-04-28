import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  height: 100vh;
  /* background: #121212; */
  border-radius: 10px;
  border: 2px solid #0085a3;
  /* get rid of border  */
  color: #f4f4f4;
  padding: 0 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  .about {
    padding-top: 0;
    width: 70%;
    max-height: auto;
    margin: auto;
  }

  .about p {
    font-size: 1rem;
  }

  @media (max-width: 780px) {
    .about {
      width: 80%;
    }

    .about h1 {
      padding-top: 0;
      font-size: 3rem;
    }
  }

  @media (max-width: 625px) {
    /* aspect-ratio: 4/5; */

    .about {
      width: 95%;
    }

    .about h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 415px) {
    /* aspect-ratio: 4/5; */

    .about {
      width: 95%;
    }

    .about h1 {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .about p {
      font-size: 0.9rem;
      line-height: 1.15rem;
    }
  }
`;
