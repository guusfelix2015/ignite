import { Minus, Plus } from 'phosphor-react';
import * as S from './styles';

interface QuantityInputProps {
  size?: 'small' | 'medium';
  onIncrement: () => void;
  onDecrement: () => void;
  quantity: number;
}

export function QuantityInput({
  size = 'medium',
  onIncrement,
  onDecrement,
  quantity,
}: QuantityInputProps) {
  return (
    <S.QuantityiContainer size={size}>
      <S.IconWrapper onClick={onDecrement}>
        <Minus size={14} weight='fill' />
      </S.IconWrapper>
      <input type='number' readOnly value={quantity} />
      <S.IconWrapper onClick={onIncrement}>
        <Plus size={14} weight='fill' />
      </S.IconWrapper>
    </S.QuantityiContainer>
  );
}
