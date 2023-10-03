import { createNumberMask } from "react-native-mask-input"

export const cvvMask = createNumberMask({
  precision: 2,
  separator: "/",
})
