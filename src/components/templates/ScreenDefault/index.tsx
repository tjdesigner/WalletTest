import React, { PropsWithChildren } from 'react';
import theme from '../../../global/styles/theme';
import { Title } from '../../Title/Title';
import { ScreenDefaultContainer, TitleScreenDefaultContainer, HeaderScreenDefaultContainer } from './styles';

interface ScreenDefaultProps extends PropsWithChildren {
    pageTitle: string
}

const ScreenDefault = ({ children, pageTitle }: ScreenDefaultProps) => (

    <>
        <HeaderScreenDefaultContainer>
            <TitleScreenDefaultContainer>
                <Title type='topPage' color={theme.colors.secondary} text={pageTitle} />
            </TitleScreenDefaultContainer>
        </HeaderScreenDefaultContainer>

        <ScreenDefaultContainer>
            {children}
        </ScreenDefaultContainer>
    </>
);

export default ScreenDefault;
