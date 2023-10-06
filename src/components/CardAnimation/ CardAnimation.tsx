import Animated, {
    useAnimatedStyle,
    withSpring,
    withTiming,
    SharedValue
} from 'react-native-reanimated';
import { Card } from '../../@types/card';
import theme from '../../global/styles/theme';
import { ContainerCardAnimation, TextCardAnimation } from './styles';
import { showHeightScreen, showWidthScreen } from '../../helpers/utils';

type CardListItemProps = Card & {
    index: number;
    dropdownItemsCount: number;
    isExpanded: SharedValue<boolean>;
    backgroundColor: string
    textColor: string
    cardName: string
};

const CardAnimationItem: React.FC<CardListItemProps> = ({
    cardNumber,
    name,
    expirationDate,
    cvv,
    cardName,
    index,
    dropdownItemsCount,
    isExpanded,
    backgroundColor,
    textColor
}) => {

    const DropdownListItemHeight = 180;
    const Margin = -10;

    const fullDropdownHeight =
        dropdownItemsCount * (DropdownListItemHeight + Margin);

    const collapsedTop = fullDropdownHeight / 3 - DropdownListItemHeight;
    const expandedTop = (DropdownListItemHeight + Margin) * index;

    const expandedScale = 1;
    const collapsedScale = 1 - index * 0;

    const expandedBackgroundColor = backgroundColor;
    const collapsedBackgroundColor = backgroundColor

    const rStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: withTiming(
                isExpanded.value ? expandedBackgroundColor : collapsedBackgroundColor
            ),
            top: withSpring(isExpanded.value ? expandedTop : collapsedTop),
            transform: [
                {
                    scale: withSpring(isExpanded.value ? expandedScale : collapsedScale),
                },
                {
                    translateY: fullDropdownHeight / (isExpanded.value ? 14 : 3),
                },
            ],
        };
    }, []);

    const isHeader = index === 0;

    const concatNumber = Number(
        dropdownItemsCount === 1 ? .005 : dropdownItemsCount === 2 ? .0035 : dropdownItemsCount === 3 ? .002 : .0006)

    return (
        <Animated.View
            onTouchEnd={() => {
                if (isHeader && dropdownItemsCount > 1) isExpanded.value = !isExpanded.value;
            }}
            style={[
                {
                    zIndex: dropdownItemsCount - index,
                    position: 'absolute',
                    marginTop: !isExpanded.value ? (index - showHeightScreen * concatNumber) * (- 60) : showHeightScreen * .015,
                    width: showWidthScreen - theme.spacesNumber.xxxLarge,
                    height: DropdownListItemHeight,
                    borderRadius: theme.spacesNumber.default,
                },
                rStyle,
            ]}
        >
            <ContainerCardAnimation>
                <TextCardAnimation style={{ color: textColor, marginBottom: theme.spacesNumber.large }}>{cardName}</TextCardAnimation>
                <TextCardAnimation style={{ color: textColor }}>{name}</TextCardAnimation>
                <TextCardAnimation style={{ color: textColor }}>{cardNumber}</TextCardAnimation>
                <TextCardAnimation style={{ color: textColor }}>{expirationDate}</TextCardAnimation>
            </ContainerCardAnimation>
        </Animated.View>
    );
};

export { CardAnimationItem };