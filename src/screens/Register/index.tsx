import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { ScreenWithCustomBackgroundComponent } from '../../components';
import { ContainerMainPage } from '../../global/styles/theme';

const RegisterScreen = () => {
    useEffect(() => {
        console.log('333', uuidv4());
    }, []);

    return (
        <ScreenWithCustomBackgroundComponent>
            <ContainerMainPage style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text>asdfasdf </Text>
            </ContainerMainPage>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterScreen;
