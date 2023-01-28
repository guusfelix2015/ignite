import styled, { css } from 'styled-components';

interface QuantityInputContainerProps {
  size?: 'small' | 'medium';
}

export const QuantityiContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background: ${p => p.theme.colors['base-button']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${p => p.theme.colors['base-subtitle']};

    &:focus {
      outline: none;
    }
  }

  ${p =>
    p.size === 'medium' &&
    css`
      padding: 0.5rem;
    `};

  ${p =>
    p.size === 'small' &&
    css`
      padding: 0.3rem 0.5rem;
    `};
`;

export const IconWrapper = styled.div.attrs({
  type: 'button',
})`
  width: 0.875rem;
  cursor: pointer;
  height: 0.875rem;
  border: none;
  color: ${p => p.theme.colors['brand-purple']};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${p => p.theme.colors['brand-purple-dark']};
  }
`;
