import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  margin: 8px;
  border-radius: 3px;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['green-500']};
`
