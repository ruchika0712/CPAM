import { View, Text } from 'react-native'
import React from 'react'
import  { createStackNavigator } from '@react-navigation/stack'
import Home from '../Screens/Home';
import BareAct from '../Screens/BareAct';
import Training from '../Screens/Training';
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    
        <Stack.Navigator screenOptions={{headerShown : false , backgroundColor: 'white', cardStyle :{backgroundColor: 'white'}} } >
            <Stack.Screen name="HomeScreen" component={Home} cardStyle={{backgroundColor: 'white'}} />
            <Stack.Screen name="BareAct" component={BareAct} cardStyle={{backgroundColor: 'white'}} />
            <Stack.Screen name="Training" component={Training} cardStyle={{backgroundColor: 'white'}} />
        </Stack.Navigator>
  )
}