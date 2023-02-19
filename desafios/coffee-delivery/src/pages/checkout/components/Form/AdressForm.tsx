import { Input } from '@/components/Input'
import { ContainerAdressForm } from './styles'

export default function AdressForm() {
  return (
    <ContainerAdressForm>
      <Input placeholder="CEP" className="cep" type="number" />
      <Input placeholder="Rua" className="street" />
      <Input placeholder="Número" type="number"/>
      <Input placeholder="Complemento" className='complement' />
      <Input placeholder="Bairro" />
      <Input placeholder="Cidade" />
      <Input placeholder="UF" />
    </ContainerAdressForm>
  )
}
