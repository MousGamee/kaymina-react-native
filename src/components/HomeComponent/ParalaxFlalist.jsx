import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants'

const ParalaxFlalist = () => {

    const fakeData = [
        {
            id: 1,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2021/12/10/16391302644e658665675b568e293051d6a6e11450_thumbnail_900x.webp'
        },
        {
            id: 2,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/10/16445052621a550634eb6f080d5191c55170e9645b_thumbnail_900x.webp'
        },
        {
            id: 3,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/01/17/16423857614552482b98d35eb6d4a059268fd38c7e_thumbnail_900x.webp'
        },
        {
            id: 4,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/10/16445052621a550634eb6f080d5191c55170e9645b_thumbnail_900x.webp'

        },
        {
            id: 5,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2021/12/10/16391302644e658665675b568e293051d6a6e11450_thumbnail_900x.webp'

        },
        {
            id: 6,
            categorie: 'Robe longue',
            image: 'https://img.ltwebstatic.com/images3_pi/2022/02/10/16445052621a550634eb6f080d5191c55170e9645b_thumbnail_900x.webp'
        },
    ]
    return (
        <View>
            <FlatList
                data={fakeData}
                keyExtractor={item => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                snapToInterval={SIZES.CARD_WIDTH + (SIZES.spacing * 2)}
                decelerationRate="fast"
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => { console.log(item)}} style={{
                            width : SIZES.CARD_WIDTH,
                            height : SIZES.CARD_HEIGHT,
                            margin : SIZES.spacing
                        }}>
                            <Image 
                                source={{ uri : item.image }}
                                style={[StyleSheet.absoluteFillObject, {
                                    resizeMode : 'cover'
                                }]}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

export default ParalaxFlalist