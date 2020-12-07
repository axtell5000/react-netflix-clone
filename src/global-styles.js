import { createGlobalStyle } from 'styled-components';

// NB This way for your Global styles across APP, put this in your root file like index.js

export const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: #000000;
    color: #333333;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;  
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

