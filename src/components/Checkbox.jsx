import { View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import { COLORS, icons, SIZES } from '../constants'

const Checkbox = ({
    containerStyle,
    isSelected,
    onPress
}) => {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                flex : 1,
                ...containerStyle
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 25,
                    height: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.base,
                    borderWidth: 3,
                    borderColor: isSelected ? COLORS.primary : COLORS.grey,
                    backgroundColor: isSelected ? COLORS.primary : null
                }}
            >
                {isSelected && <Image
                    source={icons.checkmark}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.light
                    }}
                />}
                
            </View>
            <Text
                    style={{
                        flex: 1,
                        marginLeft: SIZES.base,
                        lineHeight: 20,
                        fontSize : SIZES.width * 0.035
                    }}
                >
                    By clicking on the "I Accept..." button below, you are providing
                </Text>
        </TouchableOpacity>
    )
}

export default Checkbox