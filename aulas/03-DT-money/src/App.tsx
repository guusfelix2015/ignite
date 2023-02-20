import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { Trasactions } from './pages/Transactions';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <GlobalStyles />
        <Trasactions />
      </TransactionsProvider>
    </ThemeProvider>
  );
}
