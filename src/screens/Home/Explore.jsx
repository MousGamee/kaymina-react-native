import { View, Text, FlatList, Dimensions, Animated, TouchableOpacity, Pressable } from 'react-native'
import { useRef } from 'react'
import { BlurView } from 'expo-blur'
import { MaterialIcons } from '@expo/vector-icons';
import { SIZES, FONTS } from '../../constants';
import ParalaxFlalist from '../../components/HomeComponent/ParalaxFlalist';

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
                height: SIZES.headerHeight,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                width: SIZES.width,
                zIndex: 20,
                opacity: scrollY.interpolate({
                    inputRange: [0, SIZES.headerHeight * 2],
                    outputRange: [0, 1]
                })
            }}>
                <BlurView
                    style={{ alignItems: 'center', flex: 1, justifyContent: 'center', height: SIZES.headerHeight, width: SIZES.width, paddingTop: SIZES.height * .035, }}
                >
                    <Text style={{ ...FONTS.header }}>Explore</Text>
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
                    <View style={{ width: SIZES.width, paddingTop: SIZES.headerHeight }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SIZES.paddingHorizontal, marginBottom: SIZES.spacing }}>
                            <Text style={{ ...FONTS.h1, }}>Explore</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="insert-emoticon" SIZES={SIZES.bigIcon} color="black" />
                            </TouchableOpacity>
                        </View>
                       <ParalaxFlalist />
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