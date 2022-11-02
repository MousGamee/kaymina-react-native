import { View, Text, Image, FlatList, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react'
import { COLORS, SIZES } from '../../constants'
import ParalaxFlalist from '../../components/HomeComponent/ParalaxFlalist'
import { fakeData } from '../../constants/dummyData'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'


const Home = () => {
  const itemHeight = SIZES.height - SIZES.tabBarHeight
  const scrollY = useRef(new Animated.Value(0)).current
  return (
    <View style={{
      flex: 1
    }}>
      <Text style={{
        position: 'absolute',
        color: COLORS.light,
        zIndex: 10,
        top: SIZES.width * .22,
        left: SIZES.width * .1,
        fontSize: 25,
        fontWeight: 'bold',

      }}>KAYMINA</Text>
      <Animated.FlatList
        data={fakeData}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={SIZES.height - SIZES.tabBarHeight}
        decelerationRate="fast"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
        renderItem={({ item }) => {
          return (
            <Pressable style={{
              width: SIZES.width,
              height: itemHeight
            }}>
              <Image
                source={{ uri: item.image }}
                style={[StyleSheet.absoluteFillObject, { resizeMode: 'cover' }]}
              />
            </Pressable>
          )
        }}
      />


      {/* Dots */}
      <View style={{
        position: 'absolute',
        right: SIZES.width * .05,
        top: SIZES.height * .6,
        alignItems : 'flex-end'
      }}>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: COLORS.light,
          marginBottom : SIZES.spacing / 2
        }}>Robe Longue</Text>
        {
          fakeData.map((_, index) => {
            const inputRange = [
              (index - 1) * itemHeight,
              index * itemHeight,
              (index + 1) * itemHeight
          ]

          const bgColor = scrollY.interpolate({
            inputRange,
            outputRange: ["#333", COLORS.light, "#333"],
            extrapolate : 'clamp'
          })
            return (
              <Animated.View
              key={index}
                style={{
                  width: SIZES.dotSize,
                  height: SIZES.dotSize,
                  borderRadius: SIZES.dotSize,
                  backgroundColor:bgColor,
                  marginBottom : SIZES.spacing / 2,
                }}
              />
              )
          })
        }
      </View>
    </View>
  )
}

export default Home