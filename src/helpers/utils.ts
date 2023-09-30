import { Dimensions } from "react-native"

export const evenOrOddNumber = (index: number) => {
  if (index % 2 === 0) {
    return "par"
  } else {
    return "impar"
  }
}

export const showWidthScreen = Dimensions.get("window").width
export const showHeightScreen = Dimensions.get("window").height
