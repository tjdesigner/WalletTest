import React from "react";
import {
    ButtonContainer,
    CustomButtonProps,
    TextButton
} from "./styles";

interface ButtonTextProps extends CustomButtonProps {
    textButton: string
}

export const ButtonComponent = ({ ...props }: ButtonTextProps) => (
    <ButtonContainer {...props} activeOpacity={.7}>
        <TextButton {...props} >{props.textButton}</TextButton>
    </ButtonContainer>
);