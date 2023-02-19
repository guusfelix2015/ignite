import { RegularText } from '../Typography'
import { ContainerLocationTitle } from './styles'

interface LocationTitleProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

export default function LocationTitle({
  icon,
  title,
  subtitle
}: LocationTitleProps) {
  return (
    <ContainerLocationTitle>
      {icon}
      <div>
        <RegularText size="m" color="subtitle">
          {title}
        </RegularText>
        <RegularText size="s" color="label">
          {subtitle}
        </RegularText>
      </div>
    </ContainerLocationTitle>
  )
}
