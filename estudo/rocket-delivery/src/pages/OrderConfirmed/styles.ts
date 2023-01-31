import styled from 'styled-components';

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 5rem;

  h1:nth-child(1) {
    color: ${p => p.theme.colors['brand-yellow-dark']};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const OrderDetailsContainer = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: ${p => p.theme.colors['base-background']};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;

    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
