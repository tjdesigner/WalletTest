import Animated, {
    useAnimatedStyle,
    withSpring,
    withTiming,
    SharedValue
} from 'react-native-reanimated';
import { Card } from '../../@types/navigation';
import theme from '../../global/styles/theme';
import { useEffect } from 'react';
import { ContainerCardAnimation, TextCardAnimation } from './styles';


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
    const Margin = 10;

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

    useEffect(() => {
        console.log(isExpanded.value);

    }, [isExpanded.value])
    return (
        <Animated.View
            onTouchEnd={() => {
                if (isHeader) isExpanded.value = !isExpanded.value;
                console.log(isExpanded.value);
            }}
            style={[
                {
                    zIndex: dropdownItemsCount - index,
                    position: 'absolute',
                    marginTop: index * (isExpanded.value ? 0 : -60),
                    width: 300,
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
        </Animated.View >
    );
};

export { CardAnimationItem };