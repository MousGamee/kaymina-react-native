import { View, Text, FlatList, Dimensions, Animated, TouchableOpacity, Pressable } from 'react-native'
import { FONT, SIZE } from '../theme'
import { useRef } from 'react'
import { BlurView } from 'expo-blur'
import { MaterialIcons } from '@expo/vector-icons';

const Explore = () => {
    const scrollY = useRef(new Animated.Value(0)).current
    const { height, width } = Dimensions.get('window');

    let test = [
        { title: 1 },
        { title: 12 },
        { title: 11 },
        { title: 13 },
        { title: 15 },
        { title: 16 },
        { title: 14 },
        { title: 21 },
        { title: 31 },
    ]

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={{
                height: SIZE.headerHeight,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                width: SIZE.width,
                zIndex: 20,
                opacity: scrollY.interpolate({
                    inputRange: [0, SIZE.headerHeight * 2],
                    outputRange: [0, 1]
                })
            }}>
                <BlurView
                    style={{ alignItems: 'center', flex: 1, justifyContent: 'center', height: SIZE.headerHeight, width: SIZE.width, paddingTop: SIZE.height * .035, }}
                >
                    <Text style={{ ...FONT.header }}>Explore</Text>
                </BlurView>
            </Animated.View>

            <Animated.FlatList
                data={test}
                keyExtractor={item => item.title}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                // header list
                ListHeaderComponent={
                    <View style={{ width: SIZE.width, paddingTop: SIZE.headerHeight }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SIZE.paddingHorizontal, marginBottom: SIZE.spacing }}>
                            <Text style={{ ...FONT.h1, }}>Explore</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="insert-emoticon" size={SIZE.bigIcon} color="black" />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={test}
                            horizontal
                            keyExtractor={item => item.title}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            snapToInterval={SIZE.width / 2}
                            renderItem={({ item, index }) => {
                                return (
                                    <Pressable
                                        onPress={() => console.log(index)}
                                        style={{
                                            width: SIZE.width / 2,
                                            height: SIZE.height / 2.9,
                                            backgroundColor: '#AEAEAE',
                                            marginRight: SIZE.spacing,
                                            marginLeft: index === 0 ? SIZE.spacing : 0
                                        }}>
                                        <Text>{item.title}</Text>
                                    </Pressable>
                                )
                            }}
                        />
                    </View>
                }

                renderItem={({ item }) => {
                    return (
                        <View style={{ width: width, height: width / 3, backgroundColor: 'red', marginBottom: 10 }}>
                            <Text>{item.title}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Explore