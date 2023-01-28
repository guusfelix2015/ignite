import { TitleText } from '../../../../components/Typography';
import { CoffeesCartCard } from '../CoffesCartCard';
import * as S from './styles';

export function SelectedCoffees() {
  return (
    <S.SelectedCoffeesContainer>
      <TitleText size='xs' color='subtitle'>
        Cafés selecionados
      </TitleText>
      <S.DetaisContainer>
        <CoffeesCartCard />
        <CoffeesCartCard />
        <CoffeesCartCard />
      </S.DetaisContainer>
    </S.SelectedCoffeesContainer>
  );
}
