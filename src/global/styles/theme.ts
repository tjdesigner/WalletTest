import styled from "styled-components/native"

export default {
  colors: {
    black: "black",
    white: "white",
    danger: "#DC1637",
    info: "",
    warning: "#FFE900",
    success: "#2ec64e",
    background: "rgba(238, 238, 238, .2)",
    primary: "#142995",
    secondary: "#12C2E9",
    tertiary: "#A5FF32",
  },

  fonts: {
    family: {
      regular: "PTSans-Regular",
      italic: "PTSans-Italic",
      boldItalic: "PTSans-BoldItalic",
      bold: "PTSans-Bold",
    },
    weight: {
      normal: "normal",
      bold: "bold",
      l1: "100",
      l2: "200",
      l3: "300",
      l4: "400",
      l5: "500",
      l6: "600",
      l7: "700",
      l8: "800",
      l9: "900",
      undefined,
    },
  },
  fontSize: {
    xxxs: `${1}px`,
    xxs: `${2}px`,
    xs: `${4}px`,
    small: `${8}px`,
    default: `${16}px`,
    medium: `${24}px`,
    large: `${32}px`,
    large2: `${36}px`,
    large3: `${40}px`,
    xLarge: `${44}px`,
    xxLarge: `${48}px`,
    xxxLarge: `${60}px`,
    veryLarge: `${76}px`,
    title: `${28}px`,
    specific: `${18}px`,
  },
  fontSizeNumber: {
    xxxs: 1,
    xxs: 2,
    xs: 4,
    small: 8,
    default: 16,
    medium: 24,
    large: 32,
    xLarge: 44,
    xxLarge: 48,
    xxxLarge: 60,
    veryLarge: 76,
    title: 28,
    specific: 18,
  },
  spaces: {
    xxs: `${2}px`,
    xs: `${4}px`,
    small: `${8}px`,
    default: `${16}px`,
    medium: `${20}px`,
    medium2: `${24}px`,
    medium3: `${28}px`,
    large: `${32}px`,
    large2: `${36}px`,
    large3: `${40}px`,
    xLarge: `${44}px`,
    xxLarge: `${48}px`,
    xxxLarge: `${54}px`,
    veryLarge: `${76}px`,
  },
  spacesNumber: {
    xxs: 2,
    xs: 4,
    small: 8,
    default: 16,
    medium: 24,
    large: 32,
    large2: 36,
    large3: 40,
    xLarge: 44,
    xxLarge: 48,
    xxxLarge: 60,
    veryLarge: 76,
  },
}

interface ContainerMainPageProps {
  justifyContent: string
  alignItems: string
}

export const ContainerMainPage = styled.View<ContainerMainPageProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spaces.large};
  padding-left: ${({ theme }) => theme.spaces.medium};
  padding-right: ${({ theme }) => theme.spaces.medium};
`

interface ScrollMainPageProps {
  withPadding?: boolean
}

export const ScrollMainPageTabbar = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  padding-right: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
  border-radius: ${({ theme }) => theme.spaces.large};
`

export const ScrollMainPage = styled.ScrollView<ScrollMainPageProps>`
  flex: 1;
  padding-left: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  padding-right: ${(props) =>
    props.withPadding ? ({ theme }) => theme.spaces.default : 0};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.spaces.default};
`
