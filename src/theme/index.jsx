import { 
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic 
  } from '@expo-google-fonts/roboto'
import { Dimensions } from 'react-native'


const { width, height } = Dimensions.get('window')

export const SIZE = {
    width : width,
    height : height,
   
}


export const FONT = {
   
}

export const COLOR = {
    white : '#FFF',
    black : '#000',
    gray : '#3d3c3e',
    lightGray : '#b4b3b4'
}