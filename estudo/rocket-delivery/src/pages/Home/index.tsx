import * as S from './styles';
import { Intro } from './components/Intro';
import { OurCoffees } from './components/OurCoffees';
import { useCart } from '../../hooks/useCart';

export function HomePage() {
  const { cartItems } = useCart();
  return (
    <S.HomeContainer>
      <Intro />
      <OurCoffees />
    </S.HomeContainer>
  );
}
