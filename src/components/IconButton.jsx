import { TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const IconButton = ({
    icon,
    iconStyle,
    contentcontainerStyle,
    onPress
}) => {
  return (
    <TouchableOpacity
        style={{
            alignItems : 'center',
            justifyContent : 'center',
            ...contentcontainerStyle
        }}
        onPress={onPress}
    >
      <Image 
        source={icon}
        resizeMode='contain'
        style={{
            width : 30,
            height : 30,
            tintColor : COLORS.white,
            ...iconStyle
        }}
      />
    </TouchableOpacity>
  )
}

export default IconButton