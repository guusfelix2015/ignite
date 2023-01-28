import * as S from './styles';
import { CreditCard } from 'phosphor-react';

export function PaymentMethodInput() {
  return (
    <S.PaymentMethodContainer>
      <CreditCard size={16} />
      Cartão de crédito
    </S.PaymentMethodContainer>
  );
}
