import React, { useState, useState as useStateMock } from "react";
import { fireEvent, render } from '@testing-library/react-native'
import { RootStackParamList } from "../../@types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../../global/styles/theme";
import RegisterConfirmationScreen from ".";

const navigateMock = jest.fn()

jest.mock('uuid', () => (
    {
        v4: () => '1234asdf'
    }
))

jest.mock("@react-navigation/core");

const mockedParams = {
    params: {
        card: {
            cardName: "Green Card",
            cardNumber: "1241 2341 2341 2341",
            cvv: "231",
            expirationDate: "12/32",
            id: "ec6bdb20-c7c1-46e2-91b5-e87ddaa22ee4",
            name: "Asdf asdf sdf asf"
        }
    }
}

type RegisterConfirmation = NativeStackScreenProps<RootStackParamList, 'RegisterConfirmation'>

const optionsNavigation = {
    navigation: {
        navigate: navigateMock,
    },
    route: mockedParams
} as unknown as RegisterConfirmation

describe('Register Confirmation', () => {
    it('should render register confirmation screen', () => {

        const { toJSON } = render(<ThemeProvider theme={theme}>
            <RegisterConfirmationScreen {...optionsNavigation} />
        </ThemeProvider>)

        expect(toJSON()).toMatchSnapshot()
    })

    it('should click button moving forward', async () => {
        const { findByTestId } = render(<ThemeProvider theme={theme}>
            <RegisterConfirmationScreen {...optionsNavigation} />
        </ThemeProvider>)

        const myCardButton = await findByTestId('moving-forward')
        fireEvent.press(myCardButton)
        expect(navigateMock).toHaveBeenCalled()
    })

})
