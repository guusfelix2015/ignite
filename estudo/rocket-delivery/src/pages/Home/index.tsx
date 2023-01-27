import * as S from './styles';
import { Intro } from './components/Intro';
import { OurCoffees } from './components/OurCoffees';

export function HomePage() {
  return (
    <S.HomeContainer>
      <Intro />
      <OurCoffees />
    </S.HomeContainer>
  );
}
