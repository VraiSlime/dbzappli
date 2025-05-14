import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './src/navigations/MainNavigation'
import { Provider } from 'react-redux'
import store from './src/store/store'

const App = () => {

  console.log("heello")

  return (
    <Provider store = {store}>
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
    </Provider>
  )
}

export default App