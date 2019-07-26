import { createGlobalStyle } from 'styled-components'

export const THEME = {
  breakpoints: {
    phone: 576 - 1,
    xs: 375 - 1,
  }
}

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
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 36px;
    padding-right: 36px;

    @media(max-width: ${THEME.breakpoints.phone}px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }

  h1, h2, h3, h4, h5, h6, p, a, button, input, label {
    color: var(--black);
    font-weight: 400;
    margin: 0;
    line-height: 1;
  }

  ul {
    padding: 0;
  }

  button {
    border: none;
    background-color: var(--white);
    padding: 0;
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
    &:focus {
      outline: none;
    }
  }

  button.actionBtn {
    border-radius: 24px;
    color: var(--white);
    height: 48px;
    width: 48px;

    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${THEME.breakpoints.phone}px) {
      height: 32px;
      width: 32px;
    }
  }

  :root {
    --black: rgba(0, 0, 0, 0.87);
    --light: #ecf1f6;
    --grey: rgba(21, 38, 43, 0.3);
    --red: #f04e5e;
    --white: #ffffff;
    --blue: #139ebe;
    --green: rgba(42, 209, 117, 0.96);
    --light-blue: rgba(19, 158, 190, 0.37);
  }
`

export default GlobalStyle
