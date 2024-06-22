import { View, Text } from 'react-native'
import React from 'react'
import  { createStackNavigator } from '@react-navigation/stack'
import FormsSops from '../Screens/FormsSops'

const Stack = createStackNavigator();
export default function FormsNavigation() {
  return (
    
        <Stack.Navigator screenOptions={{headerShown : false , backgroundColor: 'white', cardStyle :{backgroundColor: 'white'}} } >
            <Stack.Screen name="FormScreen" component={FormsSops} cardStyle={{backgroundColor: 'white'}} />
            {/* <Stack.Screen name="contestPage" component={ContestPage} cardStyle={{backgroundColor: 'white'}} /> */}
        </Stack.Navigator>
  )
}
