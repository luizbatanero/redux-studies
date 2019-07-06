import styled from 'styled-components';

export const TodoItem = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }

  & + & {
    border-top: 1px solid #ddd;
  }

  span {
    flex: 1;
    color: #333;
    font-size: 14px;
    cursor: pointer;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
    opacity: ${props => (props.completed ? '0.6' : '1')};
  }

  button {
    flex: 0 0 30px;
    height: 30px;
    border: 0;
    border-radius: 3px;
    background: #bd4a4a;
    opacity: 0.7;
    transition: opacity 0.3s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    svg {
      color: #fff;
    }
  }
`;
