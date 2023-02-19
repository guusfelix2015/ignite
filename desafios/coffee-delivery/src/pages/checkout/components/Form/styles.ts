import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContainerAdressForm = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;
  background: ${p => p.theme.colors['base-background']};
  max-width: 40rem;
  padding: 40px;
  margin-top: 40px;
  border-radius: 6px;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`
export const PaymentMethodOptionsContainer = styled.div`
  margin-top: 1rem;
  padding: 2.5rem;
  background: ${p => p.theme.colors['base-background']};
  max-width: 40rem;
  border-radius: 6px;
`
export const ContainerPaymentOptions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 30px;
`
