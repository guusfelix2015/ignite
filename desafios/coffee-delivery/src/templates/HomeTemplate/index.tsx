import Intro from './components/Intro'
import { OurCoffees } from './components/OurCoffees'
import { HomeTemplateContainer } from './styles'

export default function HomeTemplate() {
  return (
    <HomeTemplateContainer className="container">
      <Intro />
      <OurCoffees />
    </HomeTemplateContainer>
  )
}
