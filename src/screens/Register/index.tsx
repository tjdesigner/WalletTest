import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Masks } from 'react-native-mask-input';

import theme, { ContainerMainPage } from '../../global/styles/theme';
import { getApiData, saveApiData } from '../../service/api';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { ControlledInput } from '../../components/ControlledInput';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { evenOrOddNumber, showWidthScreen } from '../../helpers/utils';
import { ButtonComponent, ScreenWithCustomBackgroundComponent } from '../../components';
import { IconButtonComponent } from '../../components/IconButton/IconButton';
import { Title } from '../../components/Title/Title';
import { CARD_NAME } from '../../helpers/constants';

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
    const [newCard, setNewCard] = useState<Card[]>([]);
    const [fromDatabase, setFromDatabase] = useState<Card[]>([]);
    const { handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(cardSchema) })

    const getData = async () => {
        let data = await getApiData()
        console.log('111', data);
        console.log('222', data.length)
        console.log('333', evenOrOddNumber(data.length));
        setFromDatabase(data)
    }

    const onSubmit = () => {
        const result = handleSubmit(async (data: Card) => await saveApiData(data).then(res => {
            navigation.navigate('RegisterConfirmation', {
                card: {
                    id: res.id,
                    cardName: evenOrOddNumber(fromDatabase.length) === 'par' ? CARD_NAME.GREEN : CARD_NAME.BLACK,
                    name: res.name,
                    cardNumber: res.cardNumber,
                    expirationDate: res.expirationDate,
                    cvv: res.cvv,
                }
            })
        }))
        return result()
    }

    useEffect(() => {
        getData()
    }, []);

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
                    mask={Masks.CREDIT_CARD}
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
                            mask={Masks.DATE_DDMMYYYY}
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
                    <ButtonComponent onPress={onSubmit} backgroundColor='white' fullWidth textButton='avançar' />
                </Wrapper>
            </ContainerMainPage>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterScreen;

