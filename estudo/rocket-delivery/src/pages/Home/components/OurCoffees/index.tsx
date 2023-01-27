import { TitleText } from '../../../../components/Typography';
import { coffees } from '../../../../data/coffes';
import { CofeeCard } from '../CoffeeCard';
import * as S from './styles';

export function OurCoffees() {
  return (
    <S.OurCoffeesContainer className='container'>
      <TitleText size='l' color='subtitle'>
        Nossos cafés
      </TitleText>
      <S.CoffeeList>
        {coffees.map(coffee => (
          <CofeeCard key={coffee.id} coffee={coffee} />
        ))}
      </S.CoffeeList>
    </S.OurCoffeesContainer>
  );
}
