import { TextInputProps } from "react-native"
import styled from "styled-components/native"
import theme from "../../global/styles/theme"

export interface ControllerContainerProps extends TextInputProps {
  marginBottom?: number
}

export const InputText = styled.TextInput`
  flex: 1;
  padding: ${theme.spacesNumber.default}px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.spaces.small};
  color: ${theme.colors.black};
`

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  margin: ${({ theme }) => theme.spaces.xxs};
  flex-direction: column;
`

export const ControllerContainer = styled.View<ControllerContainerProps>`
  align-self: stretch;
  color: ${({ theme }) => theme.colors.danger};
  border-width: 1px;
  border-width: 0;
  padding: ${theme.spaces.xs};
  margin-bottom: ${theme.spaces.small};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.marginBottom : theme.spacesNumber.default}px;
`

export const InputContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-radius: ${theme.spaces.small};
  margin-top: ${theme.spaces.small};
`

export const TextLabel = styled.Text`
  color: ${theme.colors.white};
`
