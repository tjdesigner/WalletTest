import React, { PropsWithChildren } from "react";
import { BackgroundTopPosition, BackgroundBottomPosition } from "./styles";
import { ContainerMainPage } from "../../../global/styles/theme";

export const ScreenWithCustomBackgroundComponent = ({ children }: PropsWithChildren) => (
    <ContainerMainPage>
        <BackgroundTopPosition />
        <BackgroundBottomPosition />
        {children}
    </ContainerMainPage>
);
