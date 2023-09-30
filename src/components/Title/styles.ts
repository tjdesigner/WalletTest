import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { TextProps } from "react-native"

export interface TitleProps extends TextProps {
  color: string
}

export const TitleContainer = styled.Text<TitleProps>`
  color: #dddddd;
  font-size: ${theme.fontSize.title};
  margin-bottom: ${theme.spaces.large};
  font-family: ${theme.fonts.family.regular};
`
