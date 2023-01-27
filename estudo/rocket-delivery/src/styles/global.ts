import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  background: ${p => p.theme.colors['base-background']};
  color: ${p => p.theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: ${p => p.theme.fonts.regular};
  font-weight: 400;
  font-size: ${p => p.theme.textSizes['text-regular-m']};
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0; 
}
`;
