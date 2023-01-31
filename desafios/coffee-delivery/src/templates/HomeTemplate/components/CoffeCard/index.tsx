import { RegularText, TitleText } from '@/components/Typography'
import { CoffeeCardContainer, Tag } from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img
        src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1676246400&Signature=AaUbPU7K9fbN3leRMvSwyEtxOphDfSM9MoiL4zcAu0YGNf7KdKOxcS~~Il6GIjmjEBYdY5FkHj4bkG4z7q9Dy6LAF1mVsgaCxIIQ6v8Z87UwT-h6JZPMLuMD3rwXilj0uQPvE5jVApKp5BET5GqN3Hpc-cmCxPgMhkK70D8BGJ9H7A~wu4fGdkZqrAM6iO7mMk0oObM36VtSinuP9BazuYMjkmzBWsUEKkQ7WlGPV68rQKTg6CObd4nq4aJNmRdWf6LWGYJjGTnWttFreUtDWxyjE3cnAEjr4StZAT~PqfeZl90UCP10eiVr40IwBtWeMm8wy0yEehUt3sYZYcHTJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
      />
      <Tag>
        <span>Tradicional</span>
        <span>Tradicional</span>
      </Tag>
      <TitleText size="m">Expresso Tradicional</TitleText>
      <RegularText size="s">
        O tradicional café feito com água quente e grãos moídos
      </RegularText>
    </CoffeeCardContainer>
  )
}
