import styled from "styled-components/native"
import theme from "../../global/styles/theme"
import { IconProps } from "react-native-vector-icons/Icon"

export interface IconCustomProps extends IconProps {
  backgroundColor?: string
}

export const ButtonContainer = styled.TouchableOpacity<IconCustomProps>`
  width: ${theme.spaces.large};
  height: ${theme.spaces.large};
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  margin-left: ${theme.spaces.small};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
`
