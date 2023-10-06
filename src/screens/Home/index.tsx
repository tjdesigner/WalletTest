import React, { useEffect, useState } from "react";
import {
    Platform,
    View,
} from "react-native";
import { RootStackScreenProps } from "../../@types/navigation";

import { ButtonComponent, ScreenWithCustomBackgroundComponent } from "../../components";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import theme from "../../global/styles/theme";
import { Title } from "../../components/Title/Title";

export const HomeScreen = ({
    navigation
}: RootStackScreenProps<'Home'>) => {

    return (
        <ScreenWithCustomBackgroundComponent>
            <View
                style={{
                    marginTop: Platform.OS === 'android' ? 30 : 64,
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: "center",
                }}
            >

                <Title marginBottom={theme.spacesNumber.large} type="contentPage" color={theme.colors.white} text="Wallet Test" />

                <Wrapper
                    marginLeft={theme.spacesNumber.medium}
                    marginBottom={theme.spacesNumber.default}
                    marginRight={theme.spacesNumber.default}
                >
                    <ButtonComponent
                        testIDButton="mycard-testid"
                        textButton="meus cartões"
                        backgroundColor="secondary"
                        fullWidth
                        onPress={() => navigation.navigate('MyCards')}
                        color="white"
                    />
                </Wrapper>

                <Wrapper
                    marginLeft={theme.spacesNumber.medium}
                    marginBottom={theme.spacesNumber.default}
                    marginRight={theme.spacesNumber.default}
                >
                    <ButtonComponent
                        testIDButton="register-testid"
                        textButton="cadastrar cartão"
                        backgroundColor="tertiary"
                        fullWidth
                        onPress={() => navigation.navigate('Register')}
                    />
                </Wrapper>
            </View>
        </ScreenWithCustomBackgroundComponent>
    );
};
