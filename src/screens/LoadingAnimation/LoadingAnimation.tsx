import React, { useEffect, useState } from 'react';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import { showHeightScreen, showWidthScreen } from '../../helpers/utils';
import theme from '../../global/styles/theme';
import WalletIconSVG from '../../assets/svgs/wallet';
import { LoadingAnimationContainer, styles } from './styles';
import { RootStackScreenProps } from '../../@types/navigation';
import { ScreenWithCustomBackgroundComponent } from '../../components/templates/ScreenWithCustomBackground/ScreenWithCustomBackground';

const LoadingAnimation = ({ navigation: { navigate } }: RootStackScreenProps<'LoadingAnimation'>) => {
    const [iconColor, setIconColor] = useState(theme.colors.secondary)

    const handleNavigation = () => {
        navigate('MyCards')
    }
    const animationTop = useSharedValue({
        top: - showWidthScreen * 4,
        left: - showWidthScreen * 1.2
    })

    const animationBottom = useSharedValue({
        bottom: - showWidthScreen * 4,
        right: - showWidthScreen * 1.2
    })

    const animationTopStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(animationTop.value.top, {
                duration: 1000
            }),
            left: withTiming(animationTop.value.left, {
                duration: 1000
            }),
        }
    })
    const animationBottomStyle = useAnimatedStyle(() => {
        return {
            bottom: withTiming(animationBottom.value.bottom, {
                duration: 1000
            }),
            right: withTiming(animationBottom.value.right, {
                duration: 1000
            }),
        }
    })

    function handleAnimationGo() {
        animationTop.value = {
            top: -showHeightScreen * .17, left: -showWidthScreen * .5
        }
        animationBottom.value = {
            bottom: -showHeightScreen * .2, right: -showWidthScreen * .5
        }
    }

    useEffect(() => {
        handleAnimationGo()
        setTimeout(() => {
            setIconColor(theme.colors.tertiary)
            handleNavigation()
        }, 1200);
    }, [])

    return (
        <ScreenWithCustomBackgroundComponent withoutBoxes>
            <LoadingAnimationContainer>
                <Animated.View style={[styles.boxTop, animationTopStyle]} />
                <WalletIconSVG color={iconColor} size={50} />
                <Animated.View style={[styles.boxBottom, animationBottomStyle]} />
            </LoadingAnimationContainer>
        </ScreenWithCustomBackgroundComponent>
    );
}

export default LoadingAnimation
