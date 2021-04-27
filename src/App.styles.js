import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* html {
        height: 100%;
    } */
body {
    background-color: #121212;
    color: #f4f4f4;
    font-family: 'Cormorant', serif;

}

h1 {
    letter-spacing: 0.3rem;
    font-size: 3.75rem;
}

    p {
        font-size: 0.9rem;
        font-weight: lighter;
        line-height: 1.85rem;
        
    }



    @media (max-width: 1024px) {
    

    h1 {
        
        font-weight: lighter;
        
    }

    p {
        font-size: 1.5rem;
        line-height: 2.4rem;
    }
  }

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
