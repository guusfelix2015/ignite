import { TitleText } from '@/components/Typography'
import { CoffeeCard } from '../CoffeCard'
import { CoffeList, ContainerOurCoffees } from './styles'
import { coffees } from '@/data/coffes'

export function OurCoffees() {
  return (
    <ContainerOurCoffees className="container">
      <TitleText size="l">Nossos cafés</TitleText>
      <CoffeList>
        {coffees.map(coffe => (
          <CoffeeCard key={coffe.id} coffe={coffe} />
        ))}
      </CoffeList>
    </ContainerOurCoffees>
  )
}
