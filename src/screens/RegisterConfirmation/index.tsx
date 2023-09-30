import React,
{
    useEffect,
    useState
} from "react";
import { Text, View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { Card, RootStackParamList, RootStackScreenProps } from "../../@types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";

const RegisterConfirmationScreen = ({ navigation }: RootStackScreenProps<'RegisterConfirmation'>) => {
    const route = useRoute<RouteProp<RootStackParamList, 'RegisterConfirmation'>>()

    const card = route.params?.card

    useEffect(() => {
        console.log("333", card);
    }, []);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{ color: 'black' }}>{card?.cardNumber}</Text>
            <Text>{card?.name}</Text>
            <Text>{card?.expirationDate}</Text>
            <Text>{card?.cvv}</Text>
        </View>
    );
};

export default RegisterConfirmationScreen;
