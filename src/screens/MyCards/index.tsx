import React, { useEffect, useState } from 'react';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber } from '../../helpers/utils';
import { Title } from '../../components/Title/Title';

const MyCardsScreen = ({
    navigation,
}: RootStackScreenProps<'MyCards'>) => {

    const [data, setData] = useState<Card[]>([]);
    const [dataItem, setDataItem] = useState<Card>({
        id: '',
        number: '',
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
        <ContainerMainPage>
            <View
                style={{
                    marginTop: Platform.OS === 'android' ? 30 : 80,

                }}
            >
                <View style={{
                    justifyContent: 'flex-end',
                    alignSelf: 'stretch',
                    alignItems: 'center',
                    backgroundColor: theme.colors.white,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    paddingVertical: 16
                }}
                >
                    <Title type='topPage' color={theme.colors.secondary} text='Meus cartões' />
                </View>

                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: "center",
                        marginHorizontal: theme.spacesNumber.default
                    }}
                >
                    {data.map((e,
                        i) => {
                        const number = evenOrOddNumber(i)
                        return (
                            <View style={{
                                position: 'relative',
                                backgroundColor: i === 0 || number === 'par' ? theme.colors.tertiary : theme.colors.black,
                                padding: theme.spacesNumber.default,
                                bottom: i === 1 ? 0 : -130,
                                width: 300,
                                height: 180,
                                borderRadius: theme.spacesNumber.default,
                            }}
                                key={e.id}
                            >
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{i}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.name}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.name}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.number}</Text>
                                <Text style={{ color: i !== 0 || number === 'impar' ? '#FFFFFF' : '#000000' }}>{e.cvv}</Text>
                            </View>
                        )
                    })
                    }
                    <Text style={{ color: 'white', marginTop: theme.spacesNumber.default }}>usar este cartão</Text>
                </View>
            </View>
        </ContainerMainPage>
    );
};

export default MyCardsScreen;
