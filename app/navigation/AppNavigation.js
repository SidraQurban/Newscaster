import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from "../screens/DetailScreen";
import tab from '../navigation/tab'



const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="tab" component={tab} />
        <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation