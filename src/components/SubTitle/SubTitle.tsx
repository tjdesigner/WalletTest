import React from "react";
import { SubTitleProps, SubTitleContainer } from "./styles";

interface SubTitleTextProps extends SubTitleProps {
    text: string
}

export const SubTitle = ({ ...props }: SubTitleTextProps) => (
    <SubTitleContainer {...props}>
        {props.text}
    </SubTitleContainer>
);
