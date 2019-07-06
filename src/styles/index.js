import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  ::selection {
    background: #666;
    color: #fff;
  }

  body {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    margin: 0 20px;
  }

  body, input, button {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }
`;
