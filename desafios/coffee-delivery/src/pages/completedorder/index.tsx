import { IconComponent } from '@/components/IconComponent'
import { RegularText, TitleText } from '@/components/Typography'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  ContainerCompletedOrder,
  ContainerData,
  ContainerFineshedOrder
} from './styles'

export default function CompletedOrder() {
  const { colors } = useTheme()
  return (
    <ContainerCompletedOrder className="container">
      <div>
        <TitleText>Uhu! Pedido confirmado</TitleText>
        <RegularText>
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
        <ContainerData>
          <ContainerFineshedOrder>
            <IconComponent
              bgColor={colors['brand-purple']}
              icon={
                <MapPin size={18} weight="fill" color={colors['base-white']} />
              }
              text={
                <RegularText>
                  Entrega em <strong>Rua João Daniel Martinelli, 102 </strong>
                  <br />
                  Farrapos - Porto Alegre, RS
                </RegularText>
              }
            />
            <IconComponent
              bgColor={colors['brand-yellow']}
              icon={
                <Timer size={18} weight="fill" color={colors['base-white']} />
              }
              text={
                <RegularText>
                  Previsão de entrega
                  <br />
                  <strong>20 min - 30 min</strong>
                </RegularText>
              }
            />
            <IconComponent
              bgColor={colors['brand-yellow-dark']}
              icon={
                <CurrencyDollar
                  size={18}
                  weight="fill"
                  color={colors['base-white']}
                />
              }
              text={
                <RegularText>
                  Pagamento na entrega
                  <br />
                  <strong>Cartão de Crédito</strong>
                </RegularText>
              }
            />
          </ContainerFineshedOrder>
        </ContainerData>
      </div>
      <img src="/images/ilustration.svg" />
    </ContainerCompletedOrder>
  )
}
