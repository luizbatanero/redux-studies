import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 15px;

  input {
    flex: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    height: 45px;
    padding: 0 14px;
    color: #333;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 45px;
    margin-left: 10px;
    background: #cfd9df;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    transition: opacity 0.3s;

    &:disabled {
      opacity: 0.7;
    }

    svg {
      color: #516c7c;
    }
  }
`;
