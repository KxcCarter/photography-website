import styled from 'styled-components';

export const StyleWrapper = styled.div`
  background: #819d74;
  width: 80%;
  padding: 20px;
  margin: 50px 0;

  justify-content: center;

  Button {
    /* padding: 20px; */
    margin: 40px 0;
  }

  @media (max-width: 400px) {
    width: 100%;
    padding: 10px;
  }
`;
