import { ContainerIcons, IconContent } from './styles'

interface IconComponentProps {
  bgColor: string
  icon?: string | React.ReactNode
  text?: string | React.ReactNode
}

export function IconComponent({ bgColor, icon, text }: IconComponentProps) {
  return (
    <ContainerIcons>
      <IconContent bgColor={bgColor}>{icon}</IconContent>
      {text}
    </ContainerIcons>
  )
}
