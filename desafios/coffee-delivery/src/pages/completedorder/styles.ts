import styled from 'styled-components'

export const ContainerCompletedOrder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  h1 {
    color: ${p => p.theme.colors['brand-yellow-dark']};
  }
`
export const ContainerData = styled.div`
  border: 1px solid red;
  display: flex;
  gap: 2rem;
  margin-top: 2.5rem;
  border: 40px;
  position: relative;
  background: ${p => p.theme.colors['base-background']};
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    inset: -1px;
    border-radius: 7px 37px 7px 37px;

    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

export const ContainerFineshedOrder = styled.div`
  display: flex;
  flex-direction: column;
`
