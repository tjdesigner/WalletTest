import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { View, useWindowDimensions, StyleSheet, Text } from 'react-native';
import Animated, {
    useAnimatedStyle,
    withSpring,
    withTiming,
    SharedValue
} from 'react-native-reanimated';
import { Card } from '../../@types/navigation';
import theme from '../../global/styles/theme';


type DropdownListItemProps = Card & {
    index: number;
    dropdownItemsCount: number;
    isExpanded: SharedValue<boolean>;
};

const CardAnimationItem: React.FC<DropdownListItemProps> = ({
    cardNumber,
    name,
    expirationDate,
    cvv,
    index,
    dropdownItemsCount,
    isExpanded,
}) => {
    const { width: windowWidth } = useWindowDimensions();
    const DropdownListItemHeight = 85;
    const Margin = 0;

    const fullDropdownHeight =
        dropdownItemsCount * (DropdownListItemHeight + Margin);

    const collapsedTop = fullDropdownHeight / 2 - DropdownListItemHeight;
    const expandedTop = (DropdownListItemHeight + Margin) * index;

    const expandedScale = 1;
    const collapsedScale = 1 - index * .08;

    const expandedBackgroundColor = '#1B1B1B';
    const collapsedBackgroundColor = "#1B1B1B"

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
                    translateY: fullDropdownHeight / 2,
                },
            ],
        };
    }, []);

    const isHeader = index === 0;

    const rLeftIconOpacityStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(isHeader ? 1 : isExpanded.value ? 1 : 0),
        };
    }, [isHeader]);

    const rHeaderArrowIconStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    rotate: withTiming(isHeader && isExpanded.value ? '90deg' : '0deg'),
                },
            ],
        };
    });

    return (
        <Animated.View
            onTouchEnd={() => {
                if (isHeader) isExpanded.value = !isExpanded.value;
            }}
            style={[
                {
                    zIndex: dropdownItemsCount - index,
                    position: 'absolute',
                    width: windowWidth * 0.95,
                    height: DropdownListItemHeight,
                    borderRadius: 10,
                },
                rStyle,
            ]}
        >
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.iconContainer,
                        {
                            left: 15,
                        },
                        rLeftIconOpacityStyle,
                    ]}
                >
                </Animated.View>
                <Text style={styles.label}>{name}</Text>
                <Text style={styles.label}>{cardNumber}</Text>
                <Text style={styles.label}>{expirationDate}</Text>
                <Animated.View
                    style={[
                        styles.iconContainer,
                        rHeaderArrowIconStyle,
                        {
                            right: 15,
                            backgroundColor: 'transparent',
                        },
                    ]}
                >
                    <MaterialIcons
                        name={isHeader ? 'arrow-forward-ios' : 'arrow-forward'}
                        size={25}
                        color={'#D4D4D4'}
                    />
                </Animated.View>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: '#D4D4D4',
        fontSize: 22,
        textTransform: 'uppercase',
        letterSpacing: 1.2,
    },
    iconContainer: {
        position: 'absolute',
        width: 45,
        aspectRatio: 1,
        backgroundColor: theme.colors.tertiary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export { CardAnimationItem };