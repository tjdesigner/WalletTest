import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { ViewProps } from "react-native"

export const BackgroundTopPosition = styled.View`
  position: absolute;
  background-color: ${theme.colors.background};
  width: 370px;
  height: 370px;
  border-radius: 40px;
  transform: rotate(58deg);
  top: -205px;
  left: -115px;
`

export const BackgroundBottomPosition = styled.View`
  position: absolute;
  background-color: ${theme.colors.background};
  width: 370px;
  height: 370px;
  border-radius: 40px;
  transform: rotate(58deg);
  bottom: -205px;
  right: -115px;
`
