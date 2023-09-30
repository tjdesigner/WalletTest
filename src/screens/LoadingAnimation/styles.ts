import styled from "styled-components/native"
import { ViewProps } from "react-native"
import theme from "../../global/styles/theme"

export interface LoadingAnimationProps extends ViewProps {}

export const LoadingAnimationContainer = styled.View<LoadingAnimationProps>`
  flex: 1;
  background-color: ${theme.colors.primary};
`
