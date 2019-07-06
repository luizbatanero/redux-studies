import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  padding: 40px;
  margin: 80px auto;
  position: relative;

  @media (max-width: 768px) {
    margin: 25px auto;
    padding: 25px;
  }
`;

export default Container;
