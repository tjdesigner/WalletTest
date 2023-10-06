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
            <TextCardTitle style={{ color: props.color }}>{props.cardName}</TextCardTitle>
            <TextCard style={{ color: props.color }}>{props.name}</TextCard>
            <TextCard style={{ color: props.color }}>{props.cardNumber}</TextCard>
            <TextCard style={{ color: props.color }}>{`Validade ${props.expirationDate}`}</TextCard>
        </Card>
    </CardContainer>
);
