import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${p => p.theme.colors['base-card']};
  max-width: 19rem;
  width: 100%;
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  text-align: center;

  .button {
    background: ${p => p.theme.colors['brand-purple-dark']};
    outline: none;
    border: none;
    color: ${p => p.theme.colors['base-white']};
    padding: 0.4rem 0.4rem;
    border-radius: 6px;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin: 0;
    }
  }

  h1 {
    margin-top: 1rem;
  }

  > img {
    margin-top: -30px;
    width: 120px;
    height: 120px;
    margin-bottom: 0.75rem;
    align-self: center;
  }
`

export const Tag = styled.div`
  align-self: center;
  display: flex;
  gap: 5px;
  span {
    background: ${p => p.theme.colors['brand-yellow-light']};
    padding: 5px 8px;
    color: ${p => p.theme.colors['brand-yellow-dark']};
    border-radius: 100px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: ${p => p.theme.textSizes['text-bold-s']};
  }
`

export const ContainerCardPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const ContainerIconsCart = styled.div`
  display: flex;
  gap: 0.5rem;
`
