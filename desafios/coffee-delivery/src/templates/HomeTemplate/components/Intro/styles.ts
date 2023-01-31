import styled from 'styled-components'

export const IntroContainer = styled.div`
  padding: 3rem 0 3rem;
  > div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 36rem;
  width: 100%;
  align-items: flex-start;

  h1 {
    margin-bottom: 1rem;
  }
`

export const ContainerIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  margin-top: 4.6rem;
`
