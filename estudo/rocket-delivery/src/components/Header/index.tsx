import * as S from './styles';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
  return (
    <S.HeaderContainer>
      <div className='container'>
        <img src={coffeeLogoImg} />
        <S.HeaderButtonsContainer>
          <S.HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </S.HeaderButton>
          <S.HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight='fill' />
          </S.HeaderButton>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  );
}
