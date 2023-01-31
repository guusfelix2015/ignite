import Header from '@/components/Header'
import { LayoutContainer } from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      <main>{children}</main>
    </LayoutContainer>
  )
}
