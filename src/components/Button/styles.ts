import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TouchableOpacityProps } from "react-native"

export interface CustomButtonProps extends TouchableOpacityProps {
  fullWidth?: boolean
}

export const ButtonContainer = styled.TouchableOpacity<CustomButtonProps>`
  background-color: ${theme.colors.secondary};
  justify-content: center;
  align-items: center;
  align-self: ${(props) => (props.fullWidth ? "stretch" : "center")};
  height: ${theme.spaces.xLarge};
  padding-left: ${theme.spaces.default};
  padding-right: ${theme.spaces.default};
  border-radius: ${theme.spaces.small};
`
