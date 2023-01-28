import { CompletedOrderForm } from './components/CompleteOrderForn';
import { SelectedCoffees } from './components/SelectedCoffees';
import * as S from './styles';

export function CompleteOrderPage() {
  return (
    <S.CompletedOrderContainer className='container'>
      <CompletedOrderForm />
      <SelectedCoffees />
    </S.CompletedOrderContainer>
  );
}
