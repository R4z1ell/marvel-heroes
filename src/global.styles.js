import { createGlobalStyle } from 'styled-components';

export const colors = {
  bodyGray: '#676767',
  mainGray: '#636767',
  plainWhite: '#fff',
  plainBlack: '#000',
  mainBlack: '#22262a',
  mainRed: '#e62429',
  lightGray: 'rgba(195, 195, 195, 0.6)',
  lightBlack: 'rgba(0, 0, 0, 0.5)'
};

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
    background-color: ${colors.bodyGray};
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
