import { IconComponent } from '@/components/IconComponent'
import { RegularText, TitleText } from '@/components/Typography'
import Image from 'next/image'
import { ShoppingCart, Clock, Coffee, Cube } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ContainerIcons, IntroContainer, TitleContent } from './styles'

export default function () {
  const { colors } = useTheme()
  return (
    <IntroContainer className="container">
      <div>
        <TitleContent>
          <TitleText size="xl">
            Encontre o café perfeito para qualquer hora do dia
          </TitleText>
          <RegularText size="l" color="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </RegularText>
          <ContainerIcons>
            <IconComponent
              text="Compra simples e segura"
              bgColor={colors['brand-yellow-dark']}
              icon={
                <ShoppingCart
                  size={16}
                  weight="fill"
                  color={colors['base-white']}
                />
              }
            />
            <IconComponent
              text="Embalagem mantém o café intacto"
              bgColor={colors['base-text']}
              icon={
                <Cube size={16} weight="fill" color={colors['base-white']} />
              }
            />
            <IconComponent
              text="Compra simples e segura"
              bgColor={colors['brand-yellow']}
              icon={
                <Clock size={16} weight="fill" color={colors['base-white']} />
              }
            />
            <IconComponent
              text="O café chega fresquinho até você"
              bgColor={colors['brand-purple']}
              icon={
                <Coffee size={16} weight="fill" color={colors['base-white']} />
              }
            />
          </ContainerIcons>
        </TitleContent>
        <Image
          src="/images/coffee-image.svg"
          width="476"
          height="350"
          alt="Imagem de uma copo de café"
        />
      </div>
    </IntroContainer>
  )
}
