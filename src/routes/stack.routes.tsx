import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../@types/navigation";
import theme from "../global/styles/theme";
import Register from "../screens/Register";
import RegisterConfirmation from "../screens/RegisterConfirmation";
import MyCards from "../screens/MyCards";
import { HomeScreen } from "../screens";

const HomeStack = createNativeStackNavigator<RootStackParamList>();

export function StackRoutes() {
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
                    headerStyle: { backgroundColor: "white" },
                    headerBackTitleVisible: false,
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
                options={{ headerTitle: 'Criar Lista' }}
                name="RegisterConfirmation"
                component={RegisterConfirmation}
            />

        </HomeStack.Navigator>
    );
}
