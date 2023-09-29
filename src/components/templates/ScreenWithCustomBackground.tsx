import React, { PropsWithChildren } from "react";
import { ContainerMainPage } from "../../global/styles/theme";
import { BackgroundTopPosition, BackgroundBottomPosition } from "./styles";

export const ScreenWithCustomBackgroundComponent = ({ children }: PropsWithChildren) => (
    <ContainerMainPage>
        <BackgroundTopPosition />
        <BackgroundBottomPosition />
        {children}
    </ContainerMainPage>
);
