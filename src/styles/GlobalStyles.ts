import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=K2D:wght@400;500;600;700&display=swap');

  @font-face {
    font-family: 'SF Pro';
    src: url('/src/assets/fonts/SF-Pro-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url('/src/assets/fonts/SF-Pro-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url('/src/assets/fonts/SF-Pro-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: 'SF Pro', 'K2D', sans-serif;
  }
`;

export default GlobalStyles;
