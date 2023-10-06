import React from "react";
import {
    ButtonContainer,
    CustomButtonProps,
    TextButton
} from "./styles";

interface ButtonTextProps extends CustomButtonProps {
    textButton: string
    testIDButton?: string
}

export const ButtonComponent = ({ ...props }: ButtonTextProps) => (
    <ButtonContainer testID={props.testIDButton} {...props} activeOpacity={.7}>
        <TextButton suppressHighlighting={true} {...props}>{props.textButton}</TextButton>
    </ButtonContainer>
);