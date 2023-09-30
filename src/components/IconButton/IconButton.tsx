import React from "react";
import { Alert, TouchableOpacity } from 'react-native'
import {
    ButtonContainer,
} from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { IconProps } from "react-native-vector-icons/Icon";

interface IconButtonTextProps extends IconProps {
    color: string
    size: number
}

export const IconButtonComponent = ({ ...props }: IconButtonTextProps) => (
    <ButtonContainer {...props} onPress={props.onPress}>
        <Icon name={props.name} size={24} color={props.color} />
    </ButtonContainer>
);
