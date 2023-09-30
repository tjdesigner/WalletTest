import React, { useEffect } from "react";
import { LoadingAnimationContainer, LoadingAnimationProps } from "./styles";
import { RootStackScreenProps } from "../../@types/navigation";
import { ActivityIndicator } from "react-native";
import theme from "../../global/styles/theme";

export const LoadingAnimation = ({ navigation, route }: RootStackScreenProps<'LoadingAnimation'>) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('RegisterConfirmation')
        }, 3000);
    }, [])

    return (
        <LoadingAnimationContainer>
            <ActivityIndicator size={"large"} color={theme.colors.white} />
        </LoadingAnimationContainer >
    )
}
