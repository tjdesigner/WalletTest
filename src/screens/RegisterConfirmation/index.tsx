import React from "react";
import { RootStackParamList, RootStackScreenProps } from "../../@types/navigation";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CardComponent } from "../../components/Card";
import { maskHideNumbers } from "../../helpers/utils";
import { ButtonComponent, ScreenWithCustomBackgroundComponent } from "../../components";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import theme from "../../global/styles/theme";
import { Title } from "../../components/Title/Title";
import { SubTitle } from "../../components/SubTitle/SubTitle";

const RegisterConfirmationScreen = ({ navigation }: RootStackScreenProps<'RegisterConfirmation'>) => {
    const route = useRoute<RouteProp<RootStackParamList, 'RegisterConfirmation'>>()
    const card = route.params?.card

    const handleNavigation = () => {
        navigation.navigate('MyCards')
    }

    return (
        <ScreenWithCustomBackgroundComponent>
            <Wrapper alignItems="center" marginBottom={theme.spacesNumber.large}>
                <Title text="Wallet Test" type="contentPage" color="white" marginBottom={theme.spacesNumber.small} />
                <SubTitle text="cartão cadastrado com sucesso" type="contentPage" color="white" />
            </Wrapper>
            <CardComponent
                name={card?.name}
                cardName={card?.cardName}
                cardNumber={maskHideNumbers(card?.cardNumber)}
                cvv={card?.cvv}
                expirationDate={card?.expirationDate}
            />
            <Wrapper alignItems="center" marginLeft={30} marginRight={30} marginTop={theme.spacesNumber.large}>
                <ButtonComponent
                    onPress={handleNavigation}
                    fullWidth
                    backgroundColor='secondary'
                    textButton={"avançar"}
                />
            </Wrapper>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterConfirmationScreen;


