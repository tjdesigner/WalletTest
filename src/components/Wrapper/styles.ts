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
  flexDirection?: "row" | "column"
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-around"
    | "space-between"
  alignItems?: "center" | "flex-start" | "flex-end"
}

export const WrapperContainer = styled.View<WrapperProps>`
  align-self: stretch;
  padding: ${(props) => (props.padding ? props.padding : 0)}px;
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : 0)}px;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : 0)}px;
  padding-bottom: ${(props) =>
    props.paddingBottom ? props.paddingBottom : 0}px;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : 0)}px;
  margin: ${(props) => (props.margin ? props.margin : 0)}px;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)}px;
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)}px;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : 0)}px;
  flex-direction: ${(props) =>
    props.flexDirection
      ? props.flexDirection === "row"
        ? "row"
        : "column"
      : "column"};
  justify-content: ${(props) =>
    props.justifyContent
      ? props.justifyContent === "flex-start"
        ? "flex-start"
        : props.justifyContent === "flex-end"
        ? "flex-end"
        : props.justifyContent === "center"
        ? "center"
        : "flex-start"
      : "flex-start"};
  align-items: ${(props) =>
    props.alignItems
      ? props.alignItems === "flex-start"
        ? "flex-start"
        : props.alignItems === "flex-end"
        ? "flex-end"
        : props.alignItems === "center"
        ? "center"
        : "flex-start"
      : "flex-start"};
`
