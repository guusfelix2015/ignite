import { TitleText } from '@/components/Typography'
import { CoffeeCard } from '../CoffeCard'
import { ContainerOurCoffees } from './styles'

export function OurCoffees() {
  return (
    <ContainerOurCoffees className="container">
      <TitleText size="l">Nossos cafés</TitleText>
      <CoffeeCard />
    </ContainerOurCoffees>
  )
}
