import React from "react";
import { Text } from 'react-native'
import {
    ButtonContainer,
    CustomButtonProps
} from "./styles";
import theme from "../../global/styles/theme";

interface ButtonTextProps extends CustomButtonProps {
    textButton: string
    color?: string
    fontSize?: number
    fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined
}

export const ButtonComponent = ({ ...props }: ButtonTextProps) => (
    <ButtonContainer {...props}>
        <Text
            style={{
                color: props.color ? props.color : theme.colors.primary,
                fontWeight: props.fontWeight ? props.fontWeight : 'normal',
                fontSize: props.fontSize ? props.fontSize : theme.fontSizeNumber.specific,
            }}>{props.textButton}</Text>
    </ButtonContainer>
);