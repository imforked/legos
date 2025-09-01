import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    background-color: #1c1c1c;
    color: #fffaf1;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0;
  }
`;
