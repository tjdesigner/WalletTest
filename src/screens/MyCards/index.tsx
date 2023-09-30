import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber } from '../../helpers/utils';
import { Title } from '../../components/Title/Title';
import { Wrapper } from '../../components/Wrapper/Wrapper';

const MyCardsScreen = ({
    navigation,
}: RootStackScreenProps<'MyCards'>) => {

    const [data, setData] = useState<Card[]>([]);
    const [dataItem, setDataItem] = useState<Card>({
        id: '',
        cardNumber: '',
        cvv: '',
        name: '',
        expirationDate: '',
    });

    const getData = async () => {
        let data = await getApiData()
        setData(data)
        console.log('111', data);

    }

    useEffect(() => {
        getData()
    }, []);


    return (
        <>
            <Wrapper
                style={{
                    marginTop: Platform.OS === 'android' ? 30 : 100,
                    backgroundColor: theme.colors.primary
                }}
            >
                <Wrapper style={{
                    justifyContent: 'center',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    backgroundColor: theme.colors.white,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    paddingVertical: 16,
                    height: 60
                }}
                >
                    <Title type='topPage' color={theme.colors.secondary} text='Meus cartões' />
                </Wrapper>
            </Wrapper>

            <Wrapper justifyContent='center' alignItems='center' style={{ backgroundColor: theme.colors.primary, flex: 1, position: 'relative' }}>
                <Wrapper justifyContent='center' alignItems='center'>
                    {data.map((e, i) => {
                        const number = evenOrOddNumber(i)
                        return (
                            <View style={{
                                backgroundColor: i === 0 || number === 'par' ? theme.colors.tertiary : theme.colors.black,
                                padding: theme.spacesNumber.default,
                                width: 300,
                                height: 180,
                                top: i * -120,
                                marginBottom: data.length === 2 ? -30 : 0,
                                borderRadius: theme.spacesNumber.default,
                            }}
                                key={e.id}
                            >
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{i}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.name}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.name}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.cardNumber}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.cvv}</Text>
                            </View>
                        )
                    })}
                    <Text style={{ color: 'white' }}>usar este cartão</Text>
                </Wrapper>
            </Wrapper>

        </>
    );
};

export default MyCardsScreen;
