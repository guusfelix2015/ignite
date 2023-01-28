import * as S from './styles';
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <S.HeaderContainer>
      <div className='container'>
        <NavLink to='/'>
          <img src={coffeeLogoImg} />
        </NavLink>
        <S.HeaderButtonsContainer>
          <S.HeaderButton variant='purple'>
            <MapPin size={20} weight='fill' />
            Porto Alegre, RS
          </S.HeaderButton>
          <NavLink to='/completeOrder'>
            <S.HeaderButton variant='yellow'>
              <ShoppingCart size={20} weight='fill' />
            </S.HeaderButton>
          </NavLink>
        </S.HeaderButtonsContainer>
      </div>
    </S.HeaderContainer>
  );
}
