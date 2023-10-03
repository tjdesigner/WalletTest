import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TextProps, TextStyle, TouchableOpacityProps } from "react-native"

const {
  primary,
  secondary,
  tertiary,
  danger,
  warning,
  success,
  white,
  black,
  textDisabled,
  backgroundDisabled,
} = theme.colors
export interface CustomButtonProps extends TouchableOpacityProps {
  fullWidth?: boolean
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "white"
    | "black"

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
      ? props.disabled
        ? backgroundDisabled
        : props.backgroundColor === "primary"
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
  border-radius: ${theme.radius.small2};
`

export const TextButton = styled.Text<TextStyle>`
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "100")};
  font-size: ${theme.fontSizeNumber.specific}px;
  font-family: ${theme.fonts.family.regular};
  background-color: ${(props) =>
    props.disabled
      ? backgroundDisabled
      : props.backgroundColor
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
  color: ${(props) =>
    props.disabled
      ? textDisabled
      : props.color
      ? props.color === "primary"
        ? primary
        : props.color === "secondary"
        ? secondary
        : props.color === "tertiary"
        ? tertiary
        : props.color === "success"
        ? success
        : props.color === "warning"
        ? warning
        : props.color === "danger"
        ? danger
        : props.color === "info"
        ? secondary
        : props.color === "white"
        ? white
        : props.color === "black"
        ? black
        : primary
      : primary};
`
