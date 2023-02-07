import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';
import {
  PriceHighLight,
  TransactionContainer,
  TransactionsTable,
} from './styles';

export function Trasactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width='50%'>Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>20/02/2021</td>
            </tr>
            <tr>
              <td width='50%'>Hamburguer</td>
              <td>
                <PriceHighLight variant='outcome'>- R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>20/02/2021</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionContainer>
    </div>
  );
}
