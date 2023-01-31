import { ContainerIcons, IconContent } from './styles'

interface IconComponentProps {
  bgColor: string
  icon: string | React.ReactNode
  text: string
}

export function IconComponent({ bgColor, icon, text }: IconComponentProps) {
  return (
    <ContainerIcons>
      <IconContent bgColor={bgColor}>{icon}</IconContent>
      <p>{text}</p>
    </ContainerIcons>
  )
}
