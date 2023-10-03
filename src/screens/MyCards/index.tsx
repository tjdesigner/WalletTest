import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import theme from '../../global/styles/theme';
import { Card, RootStackScreenProps } from '../../@types/navigation';
import { getApiData } from '../../service/api';
import { evenOrOddNumber, maskHideNumbers } from '../../helpers/utils';
import { CardAnimationItem } from '../../components/CardAnimation/ CardAnimation';
import { useSharedValue } from 'react-native-reanimated'
import ScreenDefault from '../../components/templates/ScreenDefault';
import { CARD_NAME } from '../../helpers/constants';
import { ButtonComponent } from '../../components';
import { Wrapper } from '../../components/Wrapper/Wrapper';

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
            <ScreenDefault pageTitle={'Meus cartões'}>
                {data.map((e, i) => {
                    const number = evenOrOddNumber(i)
                    return <CardAnimationItem
                        cardName={number === 'impar' ? CARD_NAME.BLACK : CARD_NAME.GREEN}
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

            </ScreenDefault>
            {!isExpanded ? < Wrapper justifyContent='center' alignItems='center' paddingBottom={theme.spacesNumber.large}>
                <Text style={{ color: 'white', fontSize: 16 }}>usar este cartão</Text>
            </Wrapper > :
                <Wrapper
                    backgroundColor='primary'
                    alignItems="center"
                    paddingLeft={theme.spacesNumber.large}
                    paddingRight={theme.spacesNumber.large}
                    paddingBottom={theme.spacesNumber.xxxLarge}>

                    <ButtonComponent
                        onPress={() => console.log('')}
                        fullWidth
                        textButton={"pagar com esse cartão"}
                        color="white"
                        backgroundColor='secondary'
                    />
                </Wrapper>
            }
        </>
    );
};

export default MyCardsScreen;
