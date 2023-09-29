import React, { useEffect, useState } from "react";
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import { RootStackScreenProps } from "../../@types/navigation";
import { ScreenWithCustomBackgroundComponent } from "../../components/templates/ScreenWithCustomBackground";
import { ButtonComponent } from "../../components";
import { WrapperComponent } from "../../components/Wrapper/Wrapper";
import theme from "../../global/styles/theme";

export const HomeScreen = ({
    route
}: RootStackScreenProps<'Home'>) => {
    console.log(route);
    useEffect(() => {
        console.log("333", uuidv4());
    }, []);

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
                <Text style={{ color: "white", fontSize: 20, fontWeight: "400" }}>
                    Wallet Test
                </Text>
                <WrapperComponent marginBottom={theme.spacesNumber.default}>
                    <ButtonComponent fullWidth />
                </WrapperComponent>
            </View>
        </ScreenWithCustomBackgroundComponent>
    );
};
