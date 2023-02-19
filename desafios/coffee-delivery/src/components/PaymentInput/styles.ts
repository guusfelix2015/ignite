import styled from 'styled-components'

export const PaymentInputContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 1rem;
  background: ${p => p.theme.colors['base-button']};
  max-width: 13rem;
  align-items: center;
  justify-content: flex-start;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${p => p.theme.colors['brand-purple-light']};
  }
`
