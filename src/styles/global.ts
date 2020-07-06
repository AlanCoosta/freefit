import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: #31353D;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Avenir Next LT Pro', 'Roboto', serif;
    /* font-family: 'Bebas Neue', cursive; */
    font-size: 1em;
  }

  h1, h2, h3 h4, h5, h6, strong {
    font-weight: 500;
  }

  a{
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  li, ul {
    list-style: none;
  }
`;
