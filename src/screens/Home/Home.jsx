import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import ParalaxFlalist from '../../components/HomeComponent/ParalaxFlalist'


const Home = () => {

  return (
    <SafeAreaView style={{ flex : 1, backgroundColor : COLORS.lightGrey80}}>
      <ParalaxFlalist />
    </SafeAreaView>
  )
}

export default Home