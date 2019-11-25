import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Serif:700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    font-family: Lato;
  }

  #root {
    display: flex;
    min-height: 100vh;
    min-width: 100%;
  }
`;
