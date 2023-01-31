import { TitleText } from '../../../../components/Typography';
import { CoffeesCartCard } from '../CoffesCartCard';
import { ConfirmationSection } from './ConfirmationSection';
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
        <ConfirmationSection />
      </S.DetaisContainer>
    </S.SelectedCoffeesContainer>
  );
}
