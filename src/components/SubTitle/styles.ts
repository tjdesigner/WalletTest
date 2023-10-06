import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TextProps } from "react-native"

export interface SubTitleProps extends TextProps {
  color: string
  type: "topPage" | "contentPage"
  marginBottom?: number
}

export const SubTitleContainer = styled.Text<SubTitleProps>`
  color: ${(props) => (props.color ? props.color : theme.colors.black)};
  font-size: ${theme.fontSize.titlePage};
  margin-bottom: ${(props) => (props.marginBottom ? theme.spaces.large : 0)};
  font-family: ${theme.fonts.family.regular};
`
