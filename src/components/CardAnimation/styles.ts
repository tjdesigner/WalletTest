import styled from "styled-components/native"
import theme from "../../global/styles/theme"

export const ContainerCardAnimation = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: "flex-start";
  padding: ${theme.spaces.default};
`

export const TextCardAnimation = styled.Text`
  font-size: ${theme.fontSize.default};
  font-family: ${theme.fonts.family.regular};
  letter-spacing: 1px;
`
