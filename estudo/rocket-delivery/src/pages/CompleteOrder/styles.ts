import styled from 'styled-components';

export const CompletedOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${p => p.theme.colors['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`;
