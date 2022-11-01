import React from 'react'
import Search from '../screens/Home/Search'
import { AuthStack } from '../navigation'
import { useSelector } from 'react-redux'
import BottomNavigation from './BottomNavigation'

const MainNav = () => {
    const isLogged = useSelector((state) => state.user.isLogged)
    return (
        <>
            {
                isLogged ? (<BottomNavigation />) : (<AuthStack />)
            }
        </>

    )
}

export default MainNav