import React from "react";
import { Platform } from 'react-native'
import { fireEvent, render } from '@testing-library/react-native'
import { HomeScreen } from ".";
import { RootStackParamList } from "../../@types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../../global/styles/theme";

const navigateMock = jest.fn()

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>

const optionsNavigation = {
    navigation: {
        navigate: navigateMock
    }
} as unknown as HomeScreenProps

describe('Home', () => {
    it('should render home screen', () => {
        const { toJSON } = render(<ThemeProvider theme={theme}>
            <HomeScreen {...optionsNavigation} />
        </ThemeProvider>)
        expect(toJSON()).toMatchSnapshot()

    })

    it('should click button my cards', async () => {
        Platform.OS = 'android'

        const { findByTestId } = render(<ThemeProvider theme={theme}>
            <HomeScreen {...optionsNavigation} />
        </ThemeProvider>)

        const myCardButton = await findByTestId('mycard-testid')
        fireEvent.press(myCardButton)

        expect(navigateMock).toHaveBeenCalled()
    })

    it('should click button register', async () => {
        Platform.OS = 'ios'
        const { findByTestId } = render(<ThemeProvider theme={theme}>
            <HomeScreen {...optionsNavigation} />
        </ThemeProvider>)

        const myCardButton = await findByTestId('register-testid')
        fireEvent.press(myCardButton)

        expect(navigateMock).toHaveBeenCalled()
    })
})