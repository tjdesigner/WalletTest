import React, { useState, useState as useStateMock } from "react";
import { fireEvent, render } from '@testing-library/react-native'
import { RootStackParamList } from "../../@types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../../global/styles/theme";
import RegisterScreen from ".";
import { Alert, TextInput } from 'react-native';

const navigateMock = jest.fn()


jest.mock('uuid', () => (
    {
        v4: () => '1234asdf'
    }
))

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>

const optionsNavigation = {
    navigation: {
        navigate: navigateMock
    }
} as unknown as RegisterScreenProps

describe('Register', () => {
    it('should render register screen', () => {
        const { toJSON } = render(<ThemeProvider theme={theme}>
            <RegisterScreen {...optionsNavigation} />
        </ThemeProvider>)
        expect(toJSON()).toMatchSnapshot()
    })

})
