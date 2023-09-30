import styled from "styled-components/native"
import theme from "../../global/styles/theme"

export interface CardProps {
  backgroundColor?: string
}

export const CardContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Card = styled.View<CardProps>`
  width: 300px;
  height: 180px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : theme.colors.tertiary};
`

export const TextCard = styled.Text`
  font-size: ${theme.fontSize.default};
  font-family: ${theme.fonts.family.regular};
`
