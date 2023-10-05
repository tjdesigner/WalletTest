import styled from "styled-components/native"
import theme from "../../../global/styles/theme"
import { Platform } from "react-native"

export const ScreenDefaultContainer = styled.View`
  background-color: ${theme.colors.primary};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

export const HeaderScreenDefaultContainer = styled.View`
  margin-top: ${Platform.OS === "android" ? 30 : 100}px;
  background-color: ${theme.colors.primary};
`
export const TitleScreenDefaultContainer = styled.View`
  justify-content: center;
  align-self: stretch;
  align-items: center;
  background-color: ${theme.colors.white};
  border-bottom-left-radius: ${theme.spaces.large3};
  border-bottom-right-radius: ${theme.spaces.large3};
  padding-left: ${theme.spaces.default};
  padding-right: ${theme.spaces.default};
  height: ${theme.spaces.xxxLarge};
`
