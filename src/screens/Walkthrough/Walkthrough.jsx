import { useRef, useState } from 'react';
import {
    View,
    Text,
    Animated
} from 'react-native';
import { TextButton } from '../../components'
import { COLORS, constants, FONTS, SIZES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import Walkthrough1 from './Walkthrough1';
import Walkthrough2 from './Walkthrough2';
import Walkthrough3 from './Walkthrough3';
import Walkthrough4 from './Walkthrough4';

const Walkthrough = () => {
    const navigation = useNavigation()
    const scrollX = useRef(new Animated.Value(0)).current
    const [walkthrough2Animate, setWalkthrough2Animate] = useState(false)
    const [walkthrough3Animate, setWalkthrough3Animate] = useState(false)
    const [walkthrough4Animate, setWalkthrough4Animate] = useState(false)

    // handle image animation
    const onViewChangeRef = useRef(({ viewableItems, changed }) => {
        if (viewableItems[0].index === 1) {
            setWalkthrough2Animate(true)
        }
        if (viewableItems[0].index === 2) {
            setWalkthrough3Animate(true)
        }
        if (viewableItems[0].index === 3) {
            setWalkthrough4Animate(true)
        }
    })

    const Dots = () => {
        const dotPosition = Animated.divide(scrollX, SIZES.width)
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    constants.walkthrough.map((item, index) => {
                        const dotColor = dotPosition.interpolate({
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [COLORS.dark08, COLORS.primary, COLORS.dark08],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={`dots-${index}`}
                                style={{
                                    borderRadius: 5,
                                    marginHorizontal: 6,
                                    width: 10,
                                    height: 10,
                                    backgroundColor: dotColor
                                }}
                            />
                        )
                    })
                }
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: SIZES.height * .2,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    paddingVertical: SIZES.height > 700 ? SIZES.padding : 20
                }}
            >
                <Dots />
                <View
                    style={{
                        flexDirection: 'row',
                        height: 55
                    }}
                >
                    <TextButton
                        label={'Join Now'}
                        contentContainerStyle={{
                            flex: 1,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGrey
                        }}
                        labelStyle={{
                            color: COLORS.primary
                        }}
                    />
                    <TextButton
                        label={'Log in'}
                        contentContainerStyle={{
                            marginLeft: SIZES.radius,
                            flex: 1,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={() =>  navigation.reset({
                            index : 0,
                            routes : [{ name : 'AuthMain'}]
                        })}
                    />
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            <Animated.FlatList
                data={constants.walkthrough}
                keyExtractor={item => item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate='fast'
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onViewableItemsChanged={onViewChangeRef.current}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                )}

                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: SIZES.width,
                                justifyContent: 'center'
                            }}
                        >
                            {/* Walthroug Image */}
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center'
                                }}>
                                {index === 0 && <Walkthrough1 />}
                                {index === 1 && <Walkthrough2 animate={walkthrough2Animate} />}
                                {index === 2 && <Walkthrough3 animate={walkthrough3Animate} />}
                                {index === 3 && <Walkthrough4 animate={walkthrough4Animate} />}
                            </View>

                            {/* Tilte & subtilte */}
                            <View
                                style={{
                                    height: SIZES.height * .35,
                                    alignItems: 'center',
                                    justifyContent: 'flex-start',
                                    paddingHorizontal: SIZES.padding
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.h1
                                    }}
                                >{item.title}</Text>
                                <Text
                                    style={{
                                        marginTop: SIZES.radius,
                                        textAlign: 'center',
                                        color: COLORS.grey,
                                        ...FONTS.body3
                                    }}
                                >{item.sub_title}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            {renderFooter()}
        </View>
    )
}

export default Walkthrough;