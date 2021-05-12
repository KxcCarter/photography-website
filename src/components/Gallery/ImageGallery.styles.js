import styled from 'styled-components';

export const StyleWrapper = styled.div`
  position: relative;
  max-width: 75vw;
  text-align: center;
  margin: auto;

  /* justify-content: center;
  box-sizing: border-box; */

  .gallery-items {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 20px;
    background-color: #80808005;
    border-radius: 3px;
    /* width: 100%; */
    overflow: hidden;
  }

  .gallery-items > * {
    /* max-width: 100%;
    min-width: 50%; */
    /* width: 25%;  */
    /* flex: 1 0 30%; */
    /* width: 100%; */
  }

  .image {
    /* width: 100%; */
    max-width: 350px;
  }
`;
