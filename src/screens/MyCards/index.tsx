import React, { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber, maskHideNumbers, showHeightScreen, showWidthScreen } from '../../helpers/utils';
import { Title } from '../../components/Title/Title';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { CardAnimationItem } from '../../components/componentsAnimation/ CardAnimation';
import { useSharedValue } from 'react-native-reanimated'

const MyCardsScreen = ({
    navigation,
}: RootStackScreenProps<'MyCards'>) => {
    const [data, setData] = useState<Card[]>([]);

    const getData = async () => {
        let data = await getApiData()
        console.log(data);

        setData(data)
    }

    const isExpanded = useSharedValue(false)

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
                        return <CardAnimationItem key={e.id} cardNumber={e.cardNumber} name={e.name} expirationDate={e.expirationDate} index={i} dropdownItemsCount={data?.length} isExpanded={isExpanded} cvv={''} />

                        // <TouchableOpacity onPress={() => Alert.alert(`cartão de índice ${i}`)} style={{
                        //     backgroundColor: i === 0 || number === 'par' ? theme.colors.tertiary : theme.colors.black,
                        //     padding: theme.spacesNumber.default,
                        //     width: 300,
                        //     height: 180,
                        //     marginBottom: 10,
                        //     borderRadius: theme.spacesNumber.default,
                        //     justifyContent: 'space-around',
                        //     position: 'absolute',
                        //     top: (40 + 10) * i,
                        // }}
                        //     key={e.id}
                        // >
                        //     <Wrapper>
                        //         <Text style={{
                        //             color: i !== 0 && number === 'impar' ? theme.colors.white : theme.colors.black,
                        //             marginBottom: theme.spacesNumber.large,
                        //             fontSize: theme.fontSizeNumber.specific,
                        //             fontFamily: theme.fonts.family.regular
                        //         }}>
                        //             {number === 'impar' ? 'Black Card' : 'Green Card'}
                        //         </Text>
                        //         <Text style={{
                        //             color: i !== 0 && number === 'impar' ? theme.colors.white : theme.colors.black,
                        //             marginBottom: theme.spacesNumber.small,
                        //             fontSize: theme.fontSizeNumber.default,
                        //             fontFamily: theme.fonts.family.regular
                        //         }}>
                        //             {e.name}
                        //         </Text>
                        //         <Text style={{
                        //             color: i !== 0 && number === 'impar' ? theme.colors.white : theme.colors.black,
                        //             marginBottom: theme.spacesNumber.small,
                        //             fontSize: theme.fontSizeNumber.default,
                        //             fontFamily: theme.fonts.family.regular
                        //         }}>
                        //             {maskHideNumbers(e.cardNumber)}
                        //         </Text>
                        //         <Text style={{
                        //             color: i !== 0 && number === 'impar' ? theme.colors.white : theme.colors.black,
                        //             marginBottom: theme.spacesNumber.small,
                        //             fontSize: theme.fontSizeNumber.default,
                        //             fontFamily: theme.fonts.family.regular
                        //         }}>
                        //             {`Validade ${e.expirationDate}`}
                        //         </Text>
                        //     </Wrapper>

                        // </TouchableOpacity>

                    })}

                    <Text style={{ color: 'white' }}>usar este cartão</Text>
                </Wrapper>
            </Wrapper>

        </>
    );
};

export default MyCardsScreen;
