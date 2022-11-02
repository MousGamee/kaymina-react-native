import Icon from 'react-native-vector-icons/Octicons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Explore, Home, Profil, Search } from '../screens';
import { COLORS, SIZES } from '../constants';


const Stack = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Stack.Navigator   
        screenOptions={{
            headerShown: false,
            tabBarShowLabel : false,
            tabBarStyle : {
                height : SIZES.tabBarHeight
            },
          }}
          
          >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name="home"
                            color={focused ? COLORS.dark : COLORS.grey60}
                            size={18}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon
                            name="search"
                            color={focused ? COLORS.dark : COLORS.grey60}
                            size={18}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Profil"
                component={Profil}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Icon 
                        name="person" 
                        color={focused ? COLORS.dark : COLORS.grey60}
                        size={18}
                        />
                    ),
                }}

            />
        </Stack.Navigator>
    )
}

export default BottomNavigation