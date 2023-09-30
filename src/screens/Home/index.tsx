import React, { useEffect, useState } from "react";
import {
    Platform,
    Text,
    View,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { RootStackScreenProps } from "../../@types/navigation";
import { ScreenWithCustomBackgroundComponent } from "../../components/templates/ScreenWithCustomBackground";
import { ButtonComponent } from "../../components";
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
                        fontWeight="500"
                        textButton="meus cartões"
                        backgroundColor="secondary"
                        fullWidth
                        activeOpacity={.7}
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
                        fontWeight="500"
                        textButton="cadastrar cartão"
                        backgroundColor="tertiary"
                        fullWidth
                        activeOpacity={.7}
                        onPress={() => navigation.navigate('Register')}
                    />
                </Wrapper>
            </View>
        </ScreenWithCustomBackgroundComponent>
    );
};
