import { ContainerHeader, HeaderButton, HeaderButtonContainer } from './styles'
import Image from 'next/image'
import { MapPin, ShoppingCart } from 'phosphor-react'

export default function Header() {
  return (
    <ContainerHeader>
      <div className="container">
        <Image
          src="/images/delivery-logo.svg"
          width="84"
          height="40"
          alt="Logo"
        />
        <HeaderButtonContainer>
          <HeaderButton variant="purple">
            <MapPin size={32} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={32} />
          </HeaderButton>
        </HeaderButtonContainer>
      </div>
    </ContainerHeader>
  )
}
