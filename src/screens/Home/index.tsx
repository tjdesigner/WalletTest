import React, { useEffect, useState } from "react";
import {
    Platform,
    Text,
    View,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { RootStackScreenProps } from "../../@types/navigation";

import { ButtonComponent, ScreenWithCustomBackgroundComponent } from "../../components";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import theme from "../../global/styles/theme";
import { Title } from "../../components/Title/Title";

export const HomeScreen = ({
    navigation, route
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
                        textButton="meus cartões"
                        backgroundColor="secondary"
                        fullWidth
                        onPress={() => navigation.navigate('MyCards')}
                        color={theme.colors.white}
                    />
                </Wrapper>

                <Wrapper
                    marginLeft={theme.spacesNumber.medium}
                    marginBottom={theme.spacesNumber.default}
                    marginRight={theme.spacesNumber.default}
                >

                    <ButtonComponent
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
