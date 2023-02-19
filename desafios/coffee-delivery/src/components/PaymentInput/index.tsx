import { RegularText } from '../Typography'
import { PaymentInputContainer } from './styles'

interface PaymentInputProps {
  icon: React.ReactNode
  typePayment: string
}

export function PaymentInput({ icon, typePayment }: PaymentInputProps) {
  return (
    <PaymentInputContainer>
      {icon}
      <RegularText size="s" color="text">
        {typePayment}
      </RegularText>
    </PaymentInputContainer>
  )
}
