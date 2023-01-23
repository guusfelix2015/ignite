import * as S from './styles';
import introImg from '../../../../assets/intro-img.svg';
import { RegularText } from '../../../../components/Typography';
import { InfoWithIcon } from '../../../../components/InfoWithIcon';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function Intro() {
  const { colors } = useTheme();
  return (
    <S.IntroContainer>
      <S.IntroContent className='container'>
        <div>
          <section>
            <S.IntroTitle size='xl'>
              Encontre o café perfeito para qualquer hora do dia
            </S.IntroTitle>
            <RegularText size='l' color='subtitle' as='h3'>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>
          <S.BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              text='Compra simples e segura'
              iconBg={colors['brand-yellow-dark']}
            />
            <InfoWithIcon
              icon={<Package weight='fill' />}
              text='Embalagem mantém o café intacto'
              iconBg={colors['base-text']}
            />
            <InfoWithIcon
              icon={<Timer weight='fill' />}
              text='Entrega rápida e rastreada'
              iconBg={colors['brand-yellow']}
            />
            <InfoWithIcon
              icon={<ShoppingCart weight='fill' />}
              text='O café chega fresquinho até você'
              iconBg={colors['brand-purple']}
            />
          </S.BenefitsContainer>
        </div>
        <img src={introImg} />
      </S.IntroContent>
    </S.IntroContainer>
  );
}
