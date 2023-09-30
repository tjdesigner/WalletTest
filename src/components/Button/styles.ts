import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TouchableOpacityProps } from "react-native"

const { primary, secondary, tertiary, danger, warning, success, white, black } =
  theme.colors
export interface CustomButtonProps extends TouchableOpacityProps {
  fullWidth?: boolean
  backgroundColor?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "white"
    | "black"
}

export const ButtonContainer = styled.TouchableOpacity<CustomButtonProps>`
  background-color: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor === "primary"
        ? primary
        : props.backgroundColor === "secondary"
        ? secondary
        : props.backgroundColor === "tertiary"
        ? tertiary
        : props.backgroundColor === "success"
        ? success
        : props.backgroundColor === "warning"
        ? warning
        : props.backgroundColor === "danger"
        ? danger
        : props.backgroundColor === "info"
        ? secondary
        : props.backgroundColor === "white"
        ? white
        : props.backgroundColor === "black"
        ? black
        : primary
      : primary};
  justify-content: center;
  align-items: center;
  align-self: ${(props) => (props.fullWidth ? "stretch" : "center")};
  height: ${theme.spaces.xxxLarge};
  border-radius: ${theme.spaces.small};
`
