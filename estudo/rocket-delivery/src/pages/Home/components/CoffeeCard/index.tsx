import { QuantityInput } from '../../../../components/QuantityInput';
import { RegularText, TitleText } from '../../../../components/Typography';
import * as S from './styles';
import { ShoppingCart } from 'phosphor-react';
import { formatMoney } from '../../../../utils/formatMoney';

export interface Coffe {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CofeeProps {
  coffee: Coffe;
}

export function CofeeCard({ coffee }: CofeeProps) {
  const formatPrice = formatMoney(coffee.price);
  return (
    <S.CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <S.Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </S.Tags>
      <S.Name>{coffee.name}</S.Name>
      <S.Description>{coffee.description}</S.Description>
      <S.CardFooter>
        <div>
          <RegularText size='s'>R$</RegularText>
          <TitleText size='m' color='text' as='strong'>
            {formatPrice}
          </TitleText>
        </div>
        <S.AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={20} weight='fill' />
          </button>
        </S.AddCartWrapper>
      </S.CardFooter>
    </S.CoffeCardContainer>
  );
}
