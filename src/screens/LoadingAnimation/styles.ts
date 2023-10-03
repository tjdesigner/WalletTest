import styled from "styled-components/native"
import { StyleSheet, ViewProps } from "react-native"
import theme from "../../global/styles/theme"
import { showWidthScreen } from "../../helpers/utils"

export interface LoadingAnimationProps extends ViewProps {}

export const LoadingAnimationContainer = styled.View<LoadingAnimationProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex: 1;
`

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

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxTop: {
    position: "absolute",
    width: showWidthScreen + showWidthScreen * 0.2,
    height: showWidthScreen + showWidthScreen * 0.2,
    backgroundColor: theme.colors.background,
    borderRadius: 50,
    transform: [
      {
        rotate: "55deg",
      },
    ],
  },
  boxBottom: {
    position: "absolute",
    width: showWidthScreen + showWidthScreen * 0.2,
    height: showWidthScreen + showWidthScreen * 0.2,
    backgroundColor: theme.colors.background,
    borderRadius: 50,
    transform: [
      {
        rotate: "55deg",
      },
    ],
  },
})
