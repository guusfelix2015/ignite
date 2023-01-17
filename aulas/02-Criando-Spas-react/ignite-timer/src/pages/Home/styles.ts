import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(p) => p.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: none;
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(p) => p.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(p) => p.theme['green-500']};
  }

  &::placeholder {
    color: ${(p) => p.theme['gray-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  border-bottom: 2px solid ${(p) => p.theme['gray-500']};

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
  border-bottom: 2px solid ${(p) => p.theme['gray-500']};
`

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', sans-serif;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(p) => p.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(p) => p.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(p) => p.theme['green-500']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const StartCountDonwButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  background: ${(p) => p.theme['green-500']};
  color: ${(p) => p.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled)hover {
    background: ${(p) => p.theme['green-700']};
  }
`
