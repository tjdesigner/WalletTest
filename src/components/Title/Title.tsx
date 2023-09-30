import React from "react";
import { TitleContainer, TitleProps } from "./styles";

interface TitleTextProps extends TitleProps {
    text: string
}

export const Title = ({ ...props }: TitleTextProps) => (
    <TitleContainer {...props}>
        {props.text}
    </TitleContainer>
);
