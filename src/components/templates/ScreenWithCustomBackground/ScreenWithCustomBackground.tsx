import React, { PropsWithChildren } from "react";
import { BackgroundTopPosition, BackgroundBottomPosition } from "./styles";
import { ContainerMainPage } from "../../../global/styles/default.styles";

interface ScreenWithCustomBackgroundProps extends PropsWithChildren {
    withoutBoxes?: boolean
}

export const ScreenWithCustomBackgroundComponent = ({ children, withoutBoxes }: ScreenWithCustomBackgroundProps) => (
    <ContainerMainPage>
        {Boolean(!withoutBoxes) && <>
            <BackgroundTopPosition />
            <BackgroundBottomPosition />
        </>}
        {children}
    </ContainerMainPage>
);
