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
import theme, { ContainerMainPage } from "../../global/styles/theme";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../@types/navigation";
import { BackgroundTemplateScreen } from "../../components/templates/BackgroundTemplateScreen";

export const HomeScreen = ({
    navigation,
}: RootStackScreenProps<'HomeScreen'>) => {
    const route = useRoute<"HomeScreen">();
    console.log(route);
    useEffect(() => {
        console.log("333", uuidv4());
    }, []);

    return (
        <BackgroundTemplateScreen navigation={undefined} route={undefined}>
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
                <TouchableOpacity onPress={() => navigation.navigate("MyCards")}>
                    <Text>meus cartões</Text>
                </TouchableOpacity>
            </View>
        </BackgroundTemplateScreen>
    );
};
