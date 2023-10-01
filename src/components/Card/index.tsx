import React from "react";
import { TextCard, CardContainer, CardProps, Card, TextCardTitle } from "./styles";

interface CardDataProps extends CardProps {
    cardName?: string
    cardNumber?: string
    name?: string
    cvv?: string
    expirationDate?: string
}

export const CardComponent = ({ ...props }: CardDataProps) => (
    <CardContainer>
        <Card {...props}>
            <TextCardTitle>{props.cardName}</TextCardTitle>
            <TextCard>{props.name}</TextCard>
            <TextCard>{props.cardNumber}</TextCard>
            <TextCard>{`Validade ${props.expirationDate}`}</TextCard>
        </Card>
    </CardContainer>
);
