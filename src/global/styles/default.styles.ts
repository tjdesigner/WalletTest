import styled from "styled-components/native"
import theme from "./theme"

interface ContainerMainPageProps {
  justifyContent: string
  alignItems: string
}

export const ContainerMainPage = styled.View<ContainerMainPageProps>`
  flex: 1;
  background-color: ${theme.colors.primary};
  padding-top: 17px;
  justify-content: center;
`

interface ScrollMainPageProps {
  withPadding?: boolean
}

export const ScrollMainPageTabbar = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) => (props.withPadding ? theme.spaces.default : 0)};
  padding-right: ${(props) => (props.withPadding ? theme.spaces.default : 0)};
  background-color: ${theme.colors.white};
  padding-top: ${theme.spaces.default};
  border-radius: ${theme.spaces.large};
`

export const ScrollMainPage = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) => (props.withPadding ? theme.spaces.default : 0)};
  padding-right: ${(props) => (props.withPadding ? theme.spaces.default : 0)};
  background-color: ${theme.colors.white};
  padding-top: ${theme.spaces.default};
`
