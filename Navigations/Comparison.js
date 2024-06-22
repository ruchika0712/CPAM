import { View, Text } from 'react-native'
import React from 'react'
import  { createStackNavigator } from '@react-navigation/stack'
import ComparisonScreen from '../Screens/ComparisonScreen';

const Stack = createStackNavigator();
export default function Comparison() {
  return (
    
        <Stack.Navigator screenOptions={{headerShown : false , backgroundColor: 'white', cardStyle :{backgroundColor: 'white'}} } >
             <Stack.Screen name="ComparisonScreen" component={ComparisonScreen} cardStyle={{backgroundColor: 'white'}} />
            {/* <Stack.Screen name="contestPage" component={ContestPage} cardStyle={{backgroundColor: 'white'}} />  */}
        </Stack.Navigator>
  )
}