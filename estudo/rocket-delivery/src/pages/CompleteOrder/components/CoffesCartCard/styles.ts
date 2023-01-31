import styled from 'styled-components';

export const CoffesCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${p => p.theme.colors['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  
  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;
    font-weight: 700;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${p => p.theme.colors['base-text']};
  font-size: 0.75rem;
  height: 100%;
  border: none;
  background: ${p => p.theme.colors['base-button']};
  padding: 0 0.5rem;
  transition: 0.4s;

  &:hover {
    background: ${p => p.theme.colors['base-button']};
  }

  svg {
    color: ${p => p.theme.colors['brand-purple']};
  }
`;
