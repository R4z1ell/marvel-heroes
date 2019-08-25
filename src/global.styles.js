import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #676767;
  }

  html {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  #root {
    position: relative;
    min-height: 100vh;
  }
`;
