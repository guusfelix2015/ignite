import LocationTitle from '@/components/LocationTitle'
import { TitleText } from '@/components/Typography'
import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import AdressForm from './AdressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'
import { ContainerForm } from './styles'

export function CompletedOrderForm() {
  const { colors } = useTheme()
  return (
    <ContainerForm>
      <TitleText size="s" color="subtitle">
        <LocationTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
          icon={<MapPin size={24} color={colors['brand-yellow']} />}
        />
        <AdressForm />
        <PaymentMethodOptions />
      </TitleText>
    </ContainerForm>
  )
}
