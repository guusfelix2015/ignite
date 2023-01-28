import { Input } from '../../../../components/Input';
import * as S from './styles';

export function AddressForm() {
  return (
    <S.AddressFormContainer>
      <Input placeholder='CEP' className='cep' type='number' />
      <Input placeholder='Rua' className='street' />
      <Input placeholder='Número' type='number' />
      <Input placeholder='Complemento' className='complement' />
      <Input placeholder='Bairro' />
      <Input placeholder='Cidade' />
      <Input placeholder='UF' />
    </S.AddressFormContainer>
  );
}
