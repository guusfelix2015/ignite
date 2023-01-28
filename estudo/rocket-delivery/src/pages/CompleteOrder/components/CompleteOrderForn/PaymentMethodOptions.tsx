import { PaymentMethodInput } from '../PaymentMethodInput';
import * as S from './styles';

export function PayamentMethodOptions() {
  return (
    <S.PaymentMethodOptionsContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </S.PaymentMethodOptionsContainer>
  );
}
