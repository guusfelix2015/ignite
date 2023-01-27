import styled from 'styled-components';

export const QuantityiContainer = styled.div`
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
