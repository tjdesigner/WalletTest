import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as yup from 'yup'
import { v4 as uuidv4 } from "uuid"
import { ButtonComponent, ScreenWithCustomBackgroundComponent } from '../../components';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { saveApiData } from '../../service/api';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { ControlledInput } from '../../components/ControlledInput';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { showWidthScreen } from '../../helpers/utils';
import { IconButtonComponent } from '../../components/IconButton/IconButton';
import { Title } from '../../components/Title/Title';

const cardSchema = yup.object({
    id: yup
        .string()
    ,
    cardNumber: yup
        .string()
        .required()
    ,
    name: yup
        .string()
        .required()
    ,
    expirationDate: yup
        .string()
        .required()
    ,
    cvv: yup
        .string()
        .required()
    ,
})

const RegisterScreen = ({ navigation }: RootStackScreenProps<'Register'>) => {
    const [data, setData] = useState<Card[]>([]);
    const { handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(cardSchema) })

    const onSubmit = () => {
        const result = handleSubmit(async (data) => await saveApiData(data).then(res => {
            navigation.navigate('RegisterConfirmation', {
                card: res
            })
        }))
        return result()
    }

    return (
        <ScreenWithCustomBackgroundComponent>
            <ContainerMainPage style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: theme.spacesNumber.large
            }}>

                <Title marginBottom={theme.spacesNumber.medium} text='Wallet Test' color={theme.colors.white} type={'contentPage'} />

                <ControlledInput
                    icon={<IconButtonComponent backgroundColor={theme.colors.secondary} type='icon-material' name='enhance-photo-translate' color={theme.colors.white} size={30} />}

                    label='Número do cartão'
                    clearButtonMode='always'
                    name="cardNumber"
                    control={control}
                    error={errors.cardNumber} />

                <ControlledInput
                    label='nome do titular do cartão'
                    clearButtonMode='always'
                    name="name"
                    control={control}
                    error={errors.name} />

                <Wrapper
                    flexDirection='row'
                >
                    <Wrapper
                        style={{
                            width: showWidthScreen * .5 - theme.spacesNumber.large2,
                            marginRight: theme.spacesNumber.small
                        }}>
                        <ControlledInput
                            label='vencimento'
                            clearButtonMode='always'
                            name="expirationDate"
                            control={control}
                            error={errors.expirationDate} />
                    </Wrapper>

                    <Wrapper style={{ width: showWidthScreen * .5 - theme.spacesNumber.large2 }}>
                        <ControlledInput
                            label='código de segurança'
                            clearButtonMode='always'
                            name="cvv"
                            control={control}
                            error={errors.cvv} />
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    marginLeft={theme.spacesNumber.xs}
                    marginRight={theme.spacesNumber.xs}
                >
                    <ButtonComponent onPress={onSubmit} activeOpacity={.7} backgroundColor='white' fullWidth textButton='avançar' />
                </Wrapper>
            </ContainerMainPage>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterScreen;

