import styled from 'styled-components';

export const StyleWrapper = styled.div`
  width: 50%;
  padding: 20px;
  margin: 50px 0;

  justify-content: center;

  Button {
    margin: 40px 0;
  }

  select {
    font-size: 1rem;
    width: 120px;
    height: 40px;
    border-radius: 5px;
    margin: 20px 0;
    background-color: whitesmoke;
    cursor: pointer;
  }

  .field {
    padding-top: 1.8rem;
  }

  .radio-field {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    width: 100%;
    padding: 10px;
  }
`;
