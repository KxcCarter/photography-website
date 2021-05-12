import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 30;

  h4 {
    display: inline-flex;
    padding: 0 30px;
    text-transform: uppercase;
    user-select: none;
    cursor: pointer;
    transition: transform, letter-spacing 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      letter-spacing: 0.05rem;
    }
  }

  .outer-wrapper {
    position: relative;
    width: 100vw;
  }

  a {
    text-decoration: none;
    color: rgba(244, 244, 244, 0.65);
    margin-top: -10px;
  }
  a:hover {
    color: rgba(244, 244, 244, 1);
  }

  h1 {
    top: 12px;
    font-size: 1rem;
    z-index: 30;
    margin-bottom: 0;
    font-size: 2rem;
    letter-spacing: 0.5rem;
    color: rgba(244, 244, 244, 0.5);
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 2rem;
      letter-spacing: 0.4rem;
    }
  }

  @media (max-width: 520px) {
    h4 {
      padding: 0 10px;
      font-size: 0.75rem;
    }

    h1 {
      font-size: 1.2rem;
      letter-spacing: 0.2rem;
    }
  }
`;
