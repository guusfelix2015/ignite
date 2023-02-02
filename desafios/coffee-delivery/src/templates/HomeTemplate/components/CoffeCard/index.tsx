import { QuantityInput } from '@/components/QuantityInput'
import { RegularText, TitleText } from '@/components/Typography'
import {
  CoffeeCardContainer,
  ContainerCardPrice,
  ContainerIconsCart,
  Tag
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import { formatMoney } from '@/utils/formatMoney'

export interface CoffeeCardProps {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface Coffe {
  coffe: CoffeeCardProps
}

export function CoffeeCard({ coffe }: Coffe) {
  const price = formatMoney(coffe.price)
  return (
    <CoffeeCardContainer>
      <img src={`/images/coffees/${coffe.photo}`} />
      <Tag>
        {coffe.tags?.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </Tag>
      <TitleText size="m">{coffe.name}</TitleText>
      <RegularText size="s">{coffe.description}</RegularText>
      <div>
        <ContainerCardPrice>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text">
            {price}
          </TitleText>
        </ContainerCardPrice>
        <ContainerIconsCart>
          <QuantityInput />
          <button className="button">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </ContainerIconsCart>
      </div>
    </CoffeeCardContainer>
  )
}
