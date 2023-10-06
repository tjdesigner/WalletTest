import React, { useCallback, useEffect, useState, useReducer } from 'react';
import { Alert, Text } from 'react-native';
import theme from '../../global/styles/theme';
import { RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber, maskHideNumbers, showHeightScreen, showWidthScreen } from '../../helpers/utils';
import { CardAnimationItem } from '../../components/CardAnimation/ CardAnimation';
import { useSharedValue } from 'react-native-reanimated'
import ScreenDefault from '../../components/templates/ScreenDefault';
import { CARD_NAME } from '../../helpers/constants';
import { ButtonComponent } from '../../components';
import { Wrapper } from '../../components/Wrapper/Wrapper';
import { Card } from '../../@types/card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from '../../redux/features/card/card-slice';
import { store } from '../../redux/features/store';

const MyCardsScreen = ({
    navigation,
}: RootStackScreenProps<'MyCards'>) => {
    const [data, setData] = useState<Card[]>([]);
    const card = useSelector((state) => state)
    const dispatch = useDispatch()

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    let isExpanded = useSharedValue(false)

    const fetchDataToStore = useCallback(async () => {
        try {
            const originalPromiseResult = await dispatch(fetchCards()).unwrap()
            if (originalPromiseResult) {
                setData(originalPromiseResult)
            }
        } catch (error) {
            console.log(error);
        }
    }, [setData, fetchCards, forceUpdate])

    useEffect(() => {
        fetchDataToStore()
    }, []);

    const handleCardSelect = () => {
        Alert.alert('Cartão selecionado com sucesso!', 'Boas compras! =)', [
            {
                text: 'Entendi',
                onPress: () => isExpanded.value = !isExpanded.value
            }
        ])
    }

    const handleAddFirstCard = () => {
        navigation.navigate('Register')
    }

    return (

        <ScreenDefault pageTitle={'Meus cartões'}>
            {data.map((e, i) => {
                const number = evenOrOddNumber(i)
                return (
                    <CardAnimationItem
                        cardName={number === 'impar' ? CARD_NAME.GREEN : CARD_NAME.BLACK}
                        textColor={i !== 0 && number === 'impar' ? theme.colors.black : theme.colors.white}
                        backgroundColor={i === 0 || number === 'par' ? theme.colors.black : theme.colors.tertiary}
                        key={e.id}
                        cardNumber={maskHideNumbers(e.cardNumber)}
                        name={e.name}
                        expirationDate={`Validade ${e.expirationDate}`}
                        index={i}
                        dropdownItemsCount={data?.length}
                        isExpanded={isExpanded} />

                )
            })}
            <>
                {data?.length > 0 ?
                    <Wrapper
                        backgroundColor='primary'
                        alignItems="center"
                        paddingLeft={theme.spacesNumber.large}
                        paddingRight={theme.spacesNumber.large}
                        marginTop={showHeightScreen * .7}
                    >
                        <ButtonComponent
                            testIDButton='select-card-testid'
                            onPress={handleCardSelect}
                            fullWidth
                            textButton={"pagar com esse cartão"}
                            color="white"
                            backgroundColor='secondary'
                            activeOpacity={.7}
                        />
                    </Wrapper> :
                    <>
                        <Wrapper
                            backgroundColor='primary'
                            alignItems="center"
                            paddingLeft={theme.spacesNumber.large}
                            paddingRight={theme.spacesNumber.large}
                            marginTop={showHeightScreen * .35}
                        >
                            <Text style={{ color: theme.colors.white, fontSize: 16, marginBottom: 32 }}>
                                Você ainda não adicionou cartão.
                            </Text>
                        </Wrapper>
                        <Wrapper
                            backgroundColor='primary'
                            alignItems="center"
                            paddingLeft={theme.spacesNumber.large}
                            paddingRight={theme.spacesNumber.large}
                            marginTop={showHeightScreen * .3}
                        >
                            <ButtonComponent
                                testIDButton='add-fist-card-testid'
                                onPress={handleAddFirstCard}
                                fullWidth
                                textButton={"Adicionar cartão"}
                                color="primary"
                                backgroundColor='white'
                                activeOpacity={.7}
                            />
                        </Wrapper>
                    </>
                }
            </>

        </ScreenDefault >
    );
};

export default MyCardsScreen;
