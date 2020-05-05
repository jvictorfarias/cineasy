import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button, option, span{
    background: #0A0F14;
    color: #FFF;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Helvetica', sans-serif;
    font-weight: normal;
  }


  button {
    cursor: pointer;
  }

`;
