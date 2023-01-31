import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${p => p.theme.colors['base-card']};
  max-width: 19rem;
  height: 19.375rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  > img {
    margin-top: -30px;
    width: 120px;
    height: 120px;
    margin-bottom: 0.75rem;
  }
`

export const Tag = styled.div`
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
