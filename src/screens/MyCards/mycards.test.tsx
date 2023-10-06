import React, { useState as useStateMock } from "react";
import { act, fireEvent, render } from '@testing-library/react-native'
import { RootStackParamList } from "../../@types/navigation";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import theme from "../../global/styles/theme";
import MyCardsScreen from ".";
import dataBase from '../../../db.json'
import { Alert } from 'react-native';

const navigateMock = jest.fn()

jest.mock('uuid', () => (
    {
        v4: () => '1234asdf'
    }
))

jest.mock('../../service/api', () => {
    const database = require('../../../db.json')
    return ({
        getApiData: () => database
    })
})

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: () => jest.fn()
}));

jest.mock('react-native-reanimated', () =>
    require('react-native-reanimated/mock'),
);

jest.mock('react-native', () => (
    {
        alert: () => jest.fn()
    }
));


const mockOnPress = jest.fn()

type MyCardScreenProps = NativeStackScreenProps<RootStackParamList, 'MyCards'>

const optionsNavigation = {
    navigation: {
        navigate: navigateMock
    }
} as unknown as MyCardScreenProps

describe('MyCards', () => {

    const setState = jest.fn()
    //beforeEach(() => {
    // ; (useStateMock as jest.Mock).mockImplementation(init => [init, setState])
    //useStateMock.mockImplementation((init: any) => [dataBase.cards, setState])
    //})

    it('should render mycards screen', () => {
        useStateMock.mockImplementation((init: any) => [dataBase.cards, setState])
        const { toJSON } = render(<ThemeProvider theme={theme}>
            <MyCardsScreen {...optionsNavigation} />
        </ThemeProvider>)


        expect(toJSON()).toMatchSnapshot()
        // act(() => {
        //     setState(database)
        // });
    })

    it('should click button select card', async () => {
        const spyAlert = jest.spyOn(Alert, 'alert')
            //@ts-ignore
            .mockImplementation((title, message, callbackOrButtons) => callbackOrButtons[0].onPress())


        useStateMock.mockImplementation((init: any) => [dataBase.cards, setState])
        const { findByTestId, getByTestId, findByText } = render(<ThemeProvider theme={theme}>
            <MyCardsScreen {...optionsNavigation} />
        </ThemeProvider>)

        const myCardButton = await findByTestId('select-card-testid')
        fireEvent.press(myCardButton)
        fireEvent.press(await findByText('Entendi'));

        expect(Alert.alert).toHaveBeenCalled()
    })

    it('Mocking Alert', () => {
        const wrapper = shallow(<Search />);
        wrapper.findWhere(n => n.props().title == 'Submit').simulate('Press');
        expect(Alert.alert).toHaveBeenCalled(); // passes
        Alert.alert.mock.calls[0][2][0].onPress() // trigger the function within the array
        expect(wrapper.state('someState')).toBe(true)
    })

    it('should render mycards screen', () => {
        useStateMock.mockImplementation((init: any) => [[], setState])
        const { toJSON } = render(<ThemeProvider theme={theme}>
            <MyCardsScreen {...optionsNavigation} />
        </ThemeProvider>)
        expect(toJSON()).toMatchSnapshot()
    })

    it('should click button add first card', async () => {
        useStateMock.mockImplementation((init: any) => [[], setState])
        const { findByTestId } = render(<ThemeProvider theme={theme}>
            <MyCardsScreen {...optionsNavigation} />
        </ThemeProvider>)

        const myCardButton = await findByTestId('add-fist-card-testid')
        fireEvent.press(myCardButton)

        expect(navigateMock).toHaveBeenCalled()
    })
})
