import { ThemeProvider } from 'styled-components';
import { Trasactions } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Trasactions />
    </ThemeProvider>
  );
}
