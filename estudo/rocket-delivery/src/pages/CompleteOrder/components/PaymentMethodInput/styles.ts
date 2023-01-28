import styled from 'styled-components';

export const PaymentMethodContainer = styled.div`
  padding: 0 1rem;
  background: ${p => p.theme.colors['base-button']};
  color: ${p => p.theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${p => p.theme.colors['base-button']};
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.colors['base-hover']};
  }

  user-select: none;

  svg {
    color: ${p => p.theme.colors['brand-purple']};
  }
`;
