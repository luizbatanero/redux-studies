import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  border: 1px solid #f5f5f5;
  padding: 15px 0;
`;

export const Button = styled.button`
  background: none;
  border: 0;
  margin: 0 5px;
  color: #666;
  cursor: pointer;
  padding-bottom: 2px;
  transition: all 0.3s;
  border-bottom: 1px solid #fff;
  font-size: 13px;

  ${props =>
    props.active &&
    css`
      color: #516c7c;
      cursor: default;
      border-color: #516c7c;
    `}
`;
