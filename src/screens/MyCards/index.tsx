import React, { useEffect, useState } from 'react';
import { Alert, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import theme, { ContainerMainPage } from '../../global/styles/theme';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber, maskHideNumbers, showHeightScreen, showWidthScreen } from '../../helpers/utils';
import { Title } from '../../components/Title/Title';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { CardAnimationItem } from '../../components/CardAnimation/ CardAnimation';
import { useSharedValue } from 'react-native-reanimated'
import ScreenDefault from '../../components/templates/ScreenDefault';

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
        <ScreenDefault pageTitle={'Meus cartões'}>
            {data.map((e, i) => {
                const number = evenOrOddNumber(i)
                return <CardAnimationItem
                    cardName={number === 'impar' ? 'Black Card' : 'Green Card'}
                    textColor={i !== 0 && number === 'impar' ? theme.colors.white : theme.colors.black}
                    backgroundColor={i === 0 || number === 'par' ? theme.colors.tertiary : theme.colors.black}
                    key={e.id}
                    cardNumber={maskHideNumbers(e.cardNumber)}
                    name={e.name}
                    expirationDate={`Validade ${e.expirationDate}`}
                    index={i}
                    dropdownItemsCount={data?.length}
                    isExpanded={isExpanded}
                    cvv={''} />

            })}

            <Text style={{ color: 'white' }}>usar este cartão</Text>
        </ScreenDefault>
    );
};

export default MyCardsScreen;
