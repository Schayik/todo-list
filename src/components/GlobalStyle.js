import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100vw;
  }

  body {
    overflow-x: hidden;
    margin: 0;
    font-family: 'Larsseit';
    background-color: var(--light);
  }

  .compress {
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 36px;
    padding-right: 36px;
  }

  h1, h2, h3, h4, h5, h6, p, a, button, input, label {
    color: var(--black);
    font-weight: 400;
    margin: 0;
    line-height: 1;
  }

  :root {
    --black: rgba(0, 0, 0, 0.87);
    --light: #ecf1f6;
    --grey: rgba(21, 38, 43, 0.3);
    --red: #f04e5e;
  }
`

export default GlobalStyle
