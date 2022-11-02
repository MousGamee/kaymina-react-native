import {
    View,
    Text,
    FlatList,
    Animated,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import React, { useRef } from 'react'
import { COLORS, SIZES } from '../../constants'
import  {fakeData}  from '../../constants/dummyData'

const ParalaxFlalist = () => {
    const scrollX = useRef(new Animated.Value(0)).current
    const FULL_SIZE = SIZES.CARD_WIDTH + (SIZES.spacing * 2)
    
    return (
        <View>
            <Animated.FlatList
                data={fakeData}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={FULL_SIZE}
                decelerationRate="fast"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true },
                )}
                renderItem={({ item, index }) => {
                    //Animation input output
                    const inputRange = [
                        (index - 1) * FULL_SIZE,
                        index * FULL_SIZE,
                        (index + 1) * FULL_SIZE
                    ]

                    const translateX = scrollX.interpolate({
                        inputRange,
                        outputRange: [SIZES.CARD_WIDTH, 0, -SIZES.CARD_WIDTH],
                    })

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange : [1, 1.1, 1]
                    })
                    return (
                        <TouchableOpacity onPress={() => { console.log(item) }} style={{
                            width: SIZES.CARD_WIDTH,
                            height: SIZES.CARD_HEIGHT,
                            margin: SIZES.spacing
                        }}>
                            <Animated.Image
                                source={{ uri: item.image }}
                                style={[StyleSheet.absoluteFillObject, {
                                    resizeMode: 'cover',
                                    transform : [{ scale }]
                                }]}
                            />
                            <Animated.Text style={{
                                fontSize: 20,
                                color: COLORS.light,
                                width: SIZES.CARD_WIDTH * .8,
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                position: 'absolute',
                                bottom: SIZES.spacing,
                                left: SIZES.spacing,
                                transform: [{ translateX }]
                            }}>{item.name}</Animated.Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ParalaxFlalist