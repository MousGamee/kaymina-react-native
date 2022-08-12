import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthMain, Walkthrough, Welcome } from '../screens'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return(
        <Stack.Navigator initialRouteName='Welcome' 
            screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Welcome' component={Welcome}/>
            <Stack.Screen name='Walkthrough' component={Walkthrough}/>
            <Stack.Screen name='AuthMain' component={AuthMain}/>
        </Stack.Navigator>
    )
}

export default AuthStack