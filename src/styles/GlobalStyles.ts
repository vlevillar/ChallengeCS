import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SF Pro';
    src: url('/public/fonts/SF-Pro-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url('/public/fonts/SF-Pro-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url('/public/fonts/SF-Pro-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'SF Pro', 'K2D', sans-serif;
    background-color: #F4F4F4
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Para evitar cualquier desplazamiento horizontal inesperado */
  width: 100%;
  height: 100%;
}

`;

export default GlobalStyles;
