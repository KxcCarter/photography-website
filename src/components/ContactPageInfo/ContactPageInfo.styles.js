import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 0;
  text-align: center;
  width: 75vw;

  .description {
    width: 65%;
    margin: auto;
  }

  .description h3 {
    font-size: 2rem;
  }

  .feature-box {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 20px;
    pointer-events: none;
  }

  .feature {
    pointer-events: auto;
    transition: 0.5s ease-in-out;
    &:hover {
      transform: scale(1.05);
    }
  }

  .feature-box:hover > div:not(:hover) {
    opacity: 0.5;
  }

  .feature {
    cursor: pointer;
  }

  h3 {
    margin-bottom: 0;
  }
  .feature p {
    font-size: 1rem;
    font-weight: 100;
    font-style: italic;
    margin-top: 0;
  }

  .adornments {
    color: #928763;
    font-size: 1.5rem;
  }

  @media (max-width: 760px) {
    .description {
      /* width: 90vw;
      padding: 0;
      margin: auto; */
      width: 100%;
    }

    h3 {
      font-size: 1.6rem;
    }

    .description p {
      font-size: 1rem;
    }

    .feature-box {
      flex-direction: column;
    }
  }
`;
