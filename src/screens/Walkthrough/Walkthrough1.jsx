import { useState, useRef, useEffect } from 'react'
import { View, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { constants, SIZES } from '../../constants'

const ITEM_WIDTH = 120

const Walkthrough1 = () => {
    const [rowImage, setRowImage] = useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images,
    ])

    const [currentPosition, setCurrentPosition] = useState(0)

    const [rowI2mage, set2RowImage] = useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images,
    ])

    const [row2currentPosition, row2setCurrentPosition] = useState(0)

    const rowFlatlist = useRef()
    const row2Flatlist = useRef()

    useEffect(() => {
        let positionTimer

        const timer = () => {
            positionTimer = setTimeout(() => {

                setCurrentPosition(prevPosisiton => {
                    const position = Number(prevPosisiton) + 1
                    rowFlatlist?.current?.scrollToOffset({ offset : position, animated : false})

                    const maxOffset = constants.walkthrough_01_01_images.length * ITEM_WIDTH

                    if(prevPosisiton > maxOffset) {
                        const offset = prevPosisiton - maxOffset
                        rowFlatlist?.current?.scrollToOffset({ offset, animated : false})
                    } else return position
                })
                row2setCurrentPosition(prevPosisiton => {
                    const position = Number(prevPosisiton) + 1
                    row2Flatlist?.current?.scrollToOffset({ offset : position, animated : false})

                    const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH

                    if(prevPosisiton > maxOffset) {
                        const offset = prevPosisiton - maxOffset
                        row2Flatlist?.current?.scrollToOffset({ offset, animated : false})
                    } else return position
                })
                timer()
            }, 32);
        }

        timer()

        return () => {
            clearTimeout(positionTimer)
        }
    }, [])
    return (
        <View>
            {/* Slider 1 */}
            <FlatList
                ref={rowFlatlist}
                decelerationRate='fast'
                horizontal
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                listKey='Slider1'
                keyExtractor={(_, index) => `Slider1_${index}`}
                data={rowImage}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Image source={item} style={{
                                height: 110,
                                width: 110
                            }} />

                        </View>
                    )
                }}
            />
            {/* Slider 2 */}
            <FlatList
                ref={row2Flatlist}
                decelerationRate='fast'
                horizontal
                style={{ marginTop: SIZES.padding , transform : [{ rotate : '180deg'}]}}
                scrollEnabled={false}
                showsHorizontalScrollIndicator={false}
                listKey='Slider2'
                keyExtractor={(_, index) => `Slider2_${index}`}
                data={rowI2mage}
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform : [{rotate : '180deg'}]
                            }}
                        >
                            <Image source={item} style={{
                                height: 110,
                                width: 110
                            }} />

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Walkthrough1