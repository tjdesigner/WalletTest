import React, { useState as useStateMock } from "react";
import { act, fireEvent, render } from '@testing-library/react-native'
import { RootStackParamList } from "../../@types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../../global/styles/theme";
import dataBase from '../../../db.json'
import LoadingAnimation from "./LoadingAnimation";

const navigateMock = jest.fn()

type LoadingAnimationProps = NativeStackScreenProps<RootStackParamList, 'LoadingAnimation'>

const optionsNavigation = {
    navigation: {
        navigate: navigateMock
    }
} as unknown as LoadingAnimationProps

describe('MyCards', () => {

    it('should render mycards screen', () => {
        const { toJSON } = render(<ThemeProvider theme={theme}>
            <LoadingAnimation {...optionsNavigation} />
        </ThemeProvider>)
        expect(toJSON()).toMatchSnapshot()
    })

})
