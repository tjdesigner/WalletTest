import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TextProps } from "react-native"

export interface TitleProps extends TextProps {
  color: string
  type: "topPage" | "contentPage"
  marginBottom?: number
}

export const TitleContainer = styled.Text<TitleProps>`
  color: ${(props) => (props.color ? props.color : theme.colors.black)};
  font-size: ${(props) =>
    props.type === "topPage" ? theme.fontSize.titlePage : theme.fontSize.title};
  margin-bottom: ${(props) =>
    props.marginBottom ? props.theme.spaces.large : 0};
  font-family: ${theme.fonts.family.regular};
`
