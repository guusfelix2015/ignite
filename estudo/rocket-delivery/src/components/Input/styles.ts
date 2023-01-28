import styled from 'styled-components';

export const InputStyleContainer = styled.input`
  height: 2.625rem;
  border-radius: 4px;
  border: 1px solid ${p => p.theme.colors['base-button']};
  background: ${p => p.theme.colors['base-input']};
  transition: 0.4s;
  color: ${p => p.theme.colors['base-text']};
  font-size: 0.75rem;

  &::placeholder {
    color: ${p => p.theme.colors['base-label']};
  }

  &:focus {
    border-color: ${p => p.theme.colors['brand-yellow-dark']};
  }
`;
