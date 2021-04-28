import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    body {
        background-color: #121212;
        color: #f4f4f4;
        font-family: 'Cormorant', serif;
        padding: 0;
        margin: auto;
        max-width: 80vw;

        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;

    }

    hr {
        width: 15%;
    }

    h1 {
        letter-spacing: 0.3rem;
        font-size: 3.75rem;
        color: rgba(244, 244, 244, 0.75);
    }

    p {
        font-size: 0.9rem;
        font-weight: lighter;
        line-height: 1.85rem;        
    }

    @media (max-width: 1366px) {
        body {
            max-width: 100vw;
        }
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
