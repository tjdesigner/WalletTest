import React from "react";
import { Text } from 'react-native'
import { ButtonContainer, CustomButtonProps } from "./styles";

export const ButtonComponent = ({ ...props }: CustomButtonProps) => (
    <ButtonContainer {...props}>
        <Text style={{ backgroundColor: 'red' }}>Meus cartões</Text>
    </ButtonContainer>
);
