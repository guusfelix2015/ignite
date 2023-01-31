import styled from 'styled-components'

interface TitleTextProps {
  size?: 'xl' | 'l' | 'm' | 's'
  color?: 'label' | 'text' | 'subtitle'
  weigth?: string | number
}

interface RegularTextProps {
  size?: 'l' | 'm' | 's'
  color?: 'label' | 'text' | 'subtitle'
  weigth?: string | number
}

export const TitleText = styled.h1<TitleTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  font-family: ${p => p.theme.fonts.title};
  line-height: 130%;
  font-weight: ${p => p.weigth ?? 800};
`
export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-regular-${size ?? 'm'}`]};
  font-family: ${p => p.theme.fonts.regular};
  line-height: 130%;
  font-weight: ${p => p.weigth ?? 400};
`
