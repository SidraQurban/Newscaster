import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import DetailScreen from "../screens/DetailScreen";
import tab from "../navigation/tab";
import WelcomeScreen from "../screens/WelcomeScreen";

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="tab" component={tab} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
export cast  = {[
  {
    "cell_type": "code",
    "metadata": {
      "id": "XH3n1v8rXH2E
