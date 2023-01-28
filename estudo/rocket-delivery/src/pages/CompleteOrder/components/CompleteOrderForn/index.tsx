import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { TitleText } from '../../../../components/Typography';
import { SectionTitle } from '../SectionTitle';
import { AddressForm } from './AdressForm';
import { PayamentMethodOptions } from './PaymentMethodOptions';

import * as S from './styles';

export function CompletedOrderForm() {
  const { colors } = useTheme();
  return (
    <S.CompletedOrderContainer>
      <TitleText size='xs' color='subtitle'>
        Complete seu pedido
      </TitleText>
      <S.FormSectionContainer>
        <SectionTitle
          title='Endereço de Entrega'
          subtitle='Informe o endereço onde deseja receber seu pedido'
          icon={<MapPinLine size={22} color={colors['brand-yellow-dark']} />}
        />
        <AddressForm />
      </S.FormSectionContainer>
      <S.FormSectionContainer>
        <SectionTitle
          title='Pagamento'
          subtitle='Pagamento é feito na hora da entrega. Escolha a forma que deseja pagar'
          icon={<CurrencyDollar size={22} color={colors['brand-purple']} />}
        />
        <PayamentMethodOptions />
      </S.FormSectionContainer>
    </S.CompletedOrderContainer>
  );
}
