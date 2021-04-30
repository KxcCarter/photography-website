import styled from 'styled-components';

export const StyledWrapper = styled.div`
  text-align: center;
  width: 75vw;

  .feature-box {
    display: flex;
    justify-content: space-around;
  }

  h3 {
    margin-bottom: 0;
  }
  .feature p {
    font-size: 1rem;
    font-style: italic;
    margin-top: 0;
  }

  .adornments {
    color: #928763;
    font-size: 1.5rem;
  }

  @media (max-width: 760px) {
    width: 90vw;
    .description p {
      font-size: 1rem;
    }

    /* .feature {
      padding: 20px 0;
    } */
  }
`;
