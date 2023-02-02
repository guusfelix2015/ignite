import styled from 'styled-components'

export const ContainerQuatityInput = styled.div`
  display: flex;
  background: ${p => p.theme.colors['base-button']};
  border-radius: 10px;
  width: 70px;
  align-items: center;
  justify-content: center;
  text-align: center;

  input {
    width: 100%;
    outline: none;
    border: none;
    background: ${p => p.theme.colors['base-button']};
    padding-left: 0.8rem;
  }

  button {
    border: none;
    background: ${p => p.theme.colors['base-button']};
    padding: 0.5rem 0.1rem;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      background: ${p => p.theme.colors['base-hover']};
    }
  }
`
