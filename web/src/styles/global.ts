import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button{
    background: #242830;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto Slab', sans-serif;
  }


  button {
    cursor: pointer;
  }

`;
