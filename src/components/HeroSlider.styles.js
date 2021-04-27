import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100vw;
  /* height: 100vh; */
  background: #ebfeff;
  border-radius: 10px;
  border: 2px solid #0085a3;
  padding: 2px;
  /* remove padding, probably */
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  aspect-ratio: 16/9;
  overflow: hidden;

  p {
    font-size: 1rem;
  }

  /* .view-container {
    width: 100vw;
    height: 90vh;
    background-color: blanchedalmond;
    overflow: hidden;
  } */

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

// export const ButtonWrapper = styled.div`
//   transition: all 1s ease;

//   :hover {
//     opacity: 0.8;
//   }

//   button {
//     cursor: pointer;
//     user-select: none;
//     font-size: 0.8rem;
//     width: 100%;
//     height: 40px;
//     margin: 5px 0;

//     background: ${({ correct, userClicked }) =>
//       correct
//         ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
//         : !correct && userClicked
//         ? 'linear-gradient(90deg, #ff5656, #c16868)'
//         : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
//     border: 3px solid #fff;
//     box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
//     border-radius: 10px;
//     color: #fff;
//     text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
//   }
// `;
