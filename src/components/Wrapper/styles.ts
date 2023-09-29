import styled from "styled-components/native"
import { ViewProps } from "react-native"

export interface WrapperProps extends ViewProps {
  padding?: number
  paddingTop?: number
  paddingRight?: number
  paddingBottom?: number
  paddingLeft?: number
  margin?: number
  marginTop?: number
  marginRight?: number
  marginBottom?: number
  marginLeft?: number
}

export const WrapperContainer = styled.TouchableOpacity<WrapperProps>`
  align-self: stretch;
  padding: ${(props) => (props.padding ? props.padding : 0)};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)};
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)};
  padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : 0)};
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)};
`
