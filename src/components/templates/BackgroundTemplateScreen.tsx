import React, { useEffect } from "react";
import { View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import theme, { ContainerMainPage } from "../../global/styles/theme";
import { useRoute } from "@react-navigation/native";
import { RootStackScreenProps } from "../../@types/navigation";

export const BackgroundTemplateScreen = ({
    children,
}: RootStackScreenProps<"Home">) => {
    const route = useRoute<"Home">();
    console.log(route);

    useEffect(() => {
        console.log("333", uuidv4());
    }, []);

    return (
        <ContainerMainPage>
            <View
                style={{
                    position: "absolute",
                    backgroundColor: theme.colors.background,
                    width: 370,
                    height: 370,
                    borderRadius: 40,
                    transform: [
                        {
                            rotate: '58deg',
                        },
                    ],
                    top: -205,
                    left: -115,
                }}
            />
            <View
                style={{
                    position: "absolute",
                    backgroundColor: theme.colors.background,
                    width: 370,
                    height: 370,
                    borderRadius: 40,
                    transform: [
                        {
                            rotate: '55deg',
                        },
                    ],
                    bottom: -205,
                    right: -115,
                }}
            />

            {children}
        </ContainerMainPage>
    );
};
