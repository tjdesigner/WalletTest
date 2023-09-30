import React from "react";
import {
    ButtonContainer, IconCustomProps,
} from "./styles";
import IconFeather from "react-native-vector-icons/Feather";
import IconAwesome from "react-native-vector-icons/FontAwesome";
import IconMaterial from "react-native-vector-icons/MaterialIcons";


interface IconButtonTextProps extends IconCustomProps {
    color: string
    size: number
    type: 'icon-feather' | 'icon-awesome' | 'icon-material'
}

export const IconButtonComponent = ({ ...props }: IconButtonTextProps) => (
    <ButtonContainer {...props} onPress={props.onPress}>
        {Boolean(props.type === 'icon-feather') && <IconFeather name={props.name} size={24} color={props.color} />}
        {Boolean(props.type === 'icon-awesome') && <IconAwesome name={props.name} size={24} color={props.color} />}
        {Boolean(props.type === 'icon-material') && <IconMaterial name={props.name} size={24} color={props.color} />}

    </ButtonContainer>
);
