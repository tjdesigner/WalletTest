import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { showWidthScreen } from "../../helpers/utils"

export interface CardProps {
  backgroundColor?: string
}

export const CardContainer = styled.View`
  justify-content: center;
  align-items: center;
`
export const Card = styled.View<CardProps>`
  min-width: 300px;
  width: ${showWidthScreen - theme.spacesNumber.xxxLarge}px;
  height: 180px;
  border-radius: ${theme.spaces.default};
  padding: ${theme.spaces.default};
  justify-content: center;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : theme.colors.tertiary};
`

export const TextCardTitle = styled.Text`
  font-size: ${theme.fontSize.specific};
  font-family: ${theme.fonts.family.regular};
  margin-bottom: ${theme.spaces.large};
`

export const TextCard = styled.Text`
  font-size: ${theme.fontSize.default};
  font-family: ${theme.fonts.family.regular};
`
