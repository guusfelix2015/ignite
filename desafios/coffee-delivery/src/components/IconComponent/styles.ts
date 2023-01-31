import styled from 'styled-components'

interface IconProps {
  bgColor: string
}

export const ContainerIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const IconContent = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${p => p.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`
