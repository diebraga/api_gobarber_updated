import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312E38 ;
    color: #fff;
    -webkit-font-smoothing: antialiased
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: #fff !important;
  }

  body, input, button {
    font: 16px "Roboto Slab", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
