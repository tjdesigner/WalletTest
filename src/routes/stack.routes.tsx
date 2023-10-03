import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/navigation";
import theme from "../global/styles/theme";
import Register from "../screens/Register";
import RegisterConfirmation from "../screens/RegisterConfirmation";
import MyCards from "../screens/MyCards";
import { HomeScreen } from "../screens";
import { IconButtonComponent } from "../components/IconButton/IconButton";
import { useNavigation } from "@react-navigation/native";
import LoadingAnimation from "../screens/LoadingAnimation/LoadingAnimation";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
    const navigation = useNavigation()
    return (
        <HomeStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: theme.colors.primary },
                headerTintColor: theme.colors.black,
                headerTransparent: true,
                headerTitle: "Wallet Test",
            }}
        >
            <HomeStack.Screen
                options={{ headerShown: false, title: "Home" }}
                name="Home"
                component={HomeScreen}
            />
            <HomeStack.Screen
                options={{
                    headerShown: true,
                    headerTransparent: true,
                    headerBackTitleVisible: false,
                    headerTitleStyle: { color: theme.colors.primary },
                    headerTintColor: theme.colors.secondary,
                    headerShadowVisible: true,
                    headerStyle: {
                        backgroundColor: "white",
                    },

                    headerRight: () =>
                        <IconButtonComponent
                            color={theme.colors.secondary}
                            name="plus"
                            size={24}
                            onPress={() => navigation.navigate('Register')} type={"icon-feather"} />
                }}
                name="MyCards"
                component={MyCards}
            />

            <HomeStack.Screen
                options={{
                    headerTitle: 'Cadastro',
                    headerBackTitleVisible: false,
                    headerTintColor: theme.colors.secondary,
                    headerStyle: { backgroundColor: 'transparent' }
                }}
                name="Register"
                component={Register}
            />

            <HomeStack.Screen
                options={{
                    headerTitle: 'Cadastro',
                    headerBackTitleVisible: false,
                    headerTintColor: theme.colors.secondary,
                    headerStyle: { backgroundColor: 'transparent' }
                }}
                name="RegisterConfirmation"
                component={RegisterConfirmation}
            />

            <HomeStack.Screen
                options={{ headerShown: false }}
                name="LoadingAnimation"
                component={LoadingAnimation}
            />

        </HomeStack.Navigator>
    );
}
