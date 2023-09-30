import React from "react";
import { RootStackParamList, RootStackScreenProps } from "../../@types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CardComponent } from "../../components/Card";

const RegisterConfirmationScreen = ({ navigation }: RootStackScreenProps<'RegisterConfirmation'>) => {
    const route = useRoute<RouteProp<RootStackParamList, 'RegisterConfirmation'>>()
    const card = route.params?.card

    return (
        <CardComponent
            cardNumber={card?.cardNumber}
            cvv={card?.cvv}
            expirationDate={card?.expirationDate}
            name={card?.name}
        />
    );
};

export default RegisterConfirmationScreen;


