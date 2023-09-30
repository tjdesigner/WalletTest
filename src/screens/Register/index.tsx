import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as yup from 'yup'
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

const cardSchema = yup.object({
    id: yup
        .string()
        .required(),
    cardNumber: yup
        .string()
        .required(),
    name: yup
        .string()
        .required(),
    expirationDate: yup
        .string()
        .required(),
    cvv: yup
        .string()
        .required(),
})

const RegisterScreen = ({ }: RootStackScreenProps<'Register'>) => {
    const [data, setData] = useState<Card[]>([]);
    const [dataItem, setDataItem] = useState<Card>({
        id: '',
        cardNumber: '',
        cvv: '',
        name: '',
        expirationDate: ''
    });

    const { control: cardControl, handleSubmit: handleCardSubmit, formState: { errors: errorsCard }, reset: resetCard } = useForm<Card>({
        resolver: yupResolver(cardSchema)
    })

    useEffect(() => {
        console.log('333', dataItem);
    }, [dataItem]);

    return (
        <ScreenWithCustomBackgroundComponent>
            <ContainerMainPage style={{
                backgroundColor: 'transparent',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: theme.spacesNumber.large
            }}>
                <Wrapper>
                    {data.length
                        ? data?.map(item => {
                            return <Text key={item.id}>{item.cardNumber}</Text>;
                        })
                        : null}
                </Wrapper>

                <ControlledInput
                    icon={<IconButtonComponent backgroundColor={theme.colors.secondary} type='icon-material' name='enhance-photo-translate' color={theme.colors.white} size={30} />}

                    label='Número do cartão'
                    clearButtonMode='always'
                    name="cardNumber"
                    onChangeText={(cardNumber) => setDataItem({ ...dataItem, cardNumber })}
                    control={cardControl}
                    error={errorsCard.cardNumber} />

                <ControlledInput
                    label='nome do titular do cartão'
                    clearButtonMode='always'
                    name="name"
                    onChangeText={(name) => setDataItem({ ...dataItem, name })}
                    control={cardControl}
                    error={errorsCard.name} />

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
                            onChangeText={(expirationDate) => setDataItem({ ...dataItem, expirationDate })}
                            control={cardControl}
                            error={errorsCard.expirationDate} />
                    </Wrapper>

                    <Wrapper style={{ width: showWidthScreen * .5 - theme.spacesNumber.large2 }}>
                        <ControlledInput
                            label='código de segurança'
                            clearButtonMode='always'
                            name="cvv"
                            onChangeText={(cvv) => setDataItem({ ...dataItem, cvv })}
                            control={cardControl}
                            error={errorsCard.cvv} />
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    marginLeft={theme.spacesNumber.xs}
                    marginRight={theme.spacesNumber.xs}
                >
                    <ButtonComponent onPress={async () => handleCardSubmit(await saveApiData(dataItem))} activeOpacity={.7} backgroundColor='white' fullWidth textButton='avançar' />
                </Wrapper>
            </ContainerMainPage>
        </ScreenWithCustomBackgroundComponent>
    );
};

export default RegisterScreen;

