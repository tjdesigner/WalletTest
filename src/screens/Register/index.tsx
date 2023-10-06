import React, { useEffect, useState } from 'react';
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { Masks } from 'react-native-mask-input';

import theme from '../../global/styles/theme';
import { saveApiData } from '../../service/api';
import { RootStackScreenProps } from '../../@types/navigation';
import { ControlledInput } from '../../components/ControlledInput';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { evenOrOddNumber, showWidthScreen } from '../../helpers/utils';
import { ButtonComponent, ScreenWithCustomBackgroundComponent } from '../../components';
import { Title } from '../../components/Title/Title';
import { CARD_NAME } from '../../helpers/constants';
import { cvvMask } from '../../helpers/customMasks';
import { PhotoIconSVG } from '../../assets/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../@types/card';
import { ContainerMainPage } from '../../global/styles/default.styles';
import { Text } from 'react-native';

const cardSchema = yup.object({
    id: yup
        .string()
    ,
    cardNumber: yup
        .string()
        .required('Número do cartão é obrigatório')
    ,
    name: yup
        .string()
        .required('Nome do titular é obrigatório')
    ,
    expirationDate: yup
        .string()
        .required('data de vencimento é obrigatória')
    ,
    cvv: yup
        .string()
        .required('código de segurança é obrigatório')
    ,
})

const RegisterScreen = ({ navigation }: RootStackScreenProps<'Register'>) => {
    const [fromDatabase, setFromDatabase] = useState<Card[]>([]);
    const { handleSubmit, control, reset, formState: { errors }, getValues } = useForm({ resolver: yupResolver(cardSchema) })
    const dispatch = useDispatch();

    const onSubmit = () => {
        const result = handleSubmit(async (data: Card) => await saveApiData(data).then(res => {
            dispatch({ type: 'card/addNewCard', payload: res })
            setFromDatabase(res)
            navigation.navigate('RegisterConfirmation', {
                card: {
                    id: res.id,
                    cardName: evenOrOddNumber(fromDatabase.length) === 'par' ||
                        fromDatabase.length !== 0 ?
                        CARD_NAME.GREEN : CARD_NAME.BLACK,
                    name: res.name,
                    cardNumber: res.cardNumber,
                    expirationDate: res.expirationDate,
                    cvv: res.cvv,
                }
            })
            reset({
                id: '',
                name: '',
                cardNumber: '',
                expirationDate: '',
                cvv: ''
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
                    icon={<PhotoIconSVG
                        marginLeft={16}
                        paddingRight={16}
                        backgroundCircle={theme.colors.secondary}
                        color={theme.colors.white}
                        size={32}
                    />}
                    mask={Masks.CREDIT_CARD}
                    placeholder=''
                    label='Número do cartão'
                    clearButtonMode='always'
                    name="cardNumber"
                    control={control}
                    error={errors.cardNumber}
                />
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
                            placeholder='00/00'
                            clearButtonMode='always'
                            name="expirationDate"
                            mask={cvvMask}
                            maxLength={5}
                            control={control}
                            error={errors.expirationDate} />
                    </Wrapper>

                    <Wrapper style={{ width: showWidthScreen * .5 - theme.spacesNumber.large2 }}>
                        <ControlledInput
                            label='código de segurança'
                            clearButtonMode='always'
                            name="cvv"

                            maxLength={3}
                            control={control}
                            placeholder='***'
                            error={errors.cvv} />
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    marginLeft={theme.spacesNumber.xs}
                    marginRight={theme.spacesNumber.xs}
                >
                    <ButtonComponent
                        onPress={onSubmit}
                        backgroundColor='secondary'
                        fullWidth
                        textButton='avançar'
                        color='white'
                    />
                </Wrapper>
            </ContainerMainPage>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterScreen;

