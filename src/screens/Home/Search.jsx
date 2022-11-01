import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Search = () => {
    const dispatch = useDispatch()
    const userName = useSelector((state) => state.user.isLogged)
    console.log(userName)
  return (
    <View
        style={{
            flex : 1,
            justifyContent : 'center',
            alignItems : 'center'
        }}
    >
      <Text>{'userName'}</Text>
    </View>
  )
}

export default Search