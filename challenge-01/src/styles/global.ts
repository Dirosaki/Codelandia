import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: transparent;
    }

    html {
      height: 100%;
    }

    body,
    #root {
      height: 100%;
      display: flex;
      flex-direction: column;
      background: ${theme.colors.dark[10]};
    }

    body,
    input,
    textarea,
    select,
    button {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-weight: 500;
    }

    button {
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: currentColor;
    }

    li {
      list-style: none;
    }
  `
)
