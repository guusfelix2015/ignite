import { ContainerQuatityInput } from './styls'
import { Minus, Plus } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function QuantityInput() {
  const { colors } = useTheme()
  return (
    <ContainerQuatityInput>
      <button>
        <Minus size={14} weight="fill" color={colors['brand-purple']} />
      </button>
      <input type="number" value={1} readOnly />
      <button>
        <Plus size={14} weight="fill" color={colors['brand-purple']} />
      </button>
    </ContainerQuatityInput>
  )
}
