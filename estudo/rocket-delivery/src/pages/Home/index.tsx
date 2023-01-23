import * as S from './styles';
import { Intro } from './components/Intro';

export function HomePage() {
  return (
    <S.HomeContainer>
      <Intro />
    </S.HomeContainer>
  );
}
