import React from "react";
import { Text } from 'react-native'
import { WrapperContainer, WrapperProps } from "./styles";

export const Wrapper = ({ ...props }: WrapperProps) => (
    <WrapperContainer {...props}>
        {props.children}
    </WrapperContainer>
);
