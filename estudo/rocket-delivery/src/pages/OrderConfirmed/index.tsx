import { RegularText, TitleText } from '../../components/Typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confimedOrderIlustration from '../../assets/confirmed-order.svg';
import { InfoWithIcon } from '../../components/InfoWithIcon';
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function OrderConfirmedPage() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className='container'>
      <div>
        <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
        <RegularText size='l' color='subtitle'>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            iconBg={colors['brand-purple']}
            icon={<MapPin weight='fill' />}
            text={
              <RegularText>
                Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow']}
            icon={<Clock weight='fill' />}
            text={
              <RegularText>
                Previsão de entrega <br /> <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            iconBg={colors['brand-yellow']}
            icon={<CurrencyDollar weight='fill' />}
            text={
              <RegularText>
                Pagamento na entrega <br /> <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confimedOrderIlustration} alt='' />
      </section>
    </OrderConfirmedContainer>
  );
}
