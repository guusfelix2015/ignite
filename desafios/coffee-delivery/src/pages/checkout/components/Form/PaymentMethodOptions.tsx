import LocationTitle from '@/components/LocationTitle'
import { PaymentInput } from '@/components/PaymentInput'
import { CreditCard, CurrencyCircleDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  ContainerPaymentOptions,
  PaymentMethodOptionsContainer
} from './styles'

export function PaymentMethodOptions() {
  const { colors } = useTheme()
  return (
    <PaymentMethodOptionsContainer>
      <LocationTitle
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={<CurrencyCircleDollar size={24} color={colors['brand-purple']} />}
      />
      <ContainerPaymentOptions>
        <PaymentInput
          icon={<CreditCard size={24} color={colors['brand-purple']} />}
          typePayment="Cartão de Crédito"
        />
        <PaymentInput
          icon={<CreditCard size={24} color={colors['brand-purple']} />}
          typePayment="Cartão de Crédito"
        />
        <PaymentInput
          icon={<CreditCard size={24} color={colors['brand-purple']} />}
          typePayment="Cartão de Crédito"
        />
      </ContainerPaymentOptions>
    </PaymentMethodOptionsContainer>
  )
}
