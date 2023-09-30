import React from "react";
import { TextCard, CardContainer, CardProps, Card } from "./styles";

interface CardDataProps extends CardProps {
    cardNumber?: string
    name?: string
    cvv?: string
    expirationDate?: string
}

export const CardComponent = ({ ...props }: CardDataProps) => (
    <CardContainer>
        <Card {...props}>
            <TextCard>{props.cardNumber}</TextCard>
            <TextCard>{props.name}</TextCard>
            <TextCard>{props.cvv}</TextCard>
            <TextCard>{props.expirationDate}</TextCard>
        </Card>
    </CardContainer>
);
