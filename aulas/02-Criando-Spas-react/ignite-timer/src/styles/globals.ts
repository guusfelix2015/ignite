import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-sizing: 0 0 0 2px ${(p) => p.theme['green-500']};;
  }

  body {
    background: ${(p) => p.theme['gray-900']};;
    color: ${(p) => p.theme['gray-300']};;
  }

  body, input, textarea, button {
    font-family: "Roboto", sans-serif;
    font-family: 400;
    font-size: 1rem;
  }
  
`
