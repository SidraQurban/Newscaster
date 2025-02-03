import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SaveScreen from "../screens/SaveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Ionicons,Fontisto,FontAwesome6 } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black",
          height: responsiveHeight(10),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(1),
                width:responsiveWidth(20)
              }}
            >
              <Ionicons
                name="home"
                size={25}
                style={{ color: focused ? "white" : "red" }}
              />
              <Text
                style={{
                  color: focused ? "white" : "red",
                  fontSize: responsiveFontSize(1.5),
                  fontWeight:"600",
                  marginTop: responsiveHeight(0.5),
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="Discover" component={DiscoverScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(1),
                width:responsiveWidth(20)
              }}
            >
              <Fontisto
                name="world-o"
                size={25}
                style={{ color: focused ? "white" : "red" }}
              />
              <Text
                style={{
                  color: focused ? "white" : "red",
                  fontSize: responsiveFontSize(1.5),
                  marginTop: responsiveHeight(0.5),
                  fontWeight:"600",
                }}
              >
                DISCOVER
              </Text>
            </View>
          ),
        }}/>
      <Tab.Screen name="Save" component={SaveScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(1),
                width:responsiveWidth(20)
              }}
            >
              <Fontisto
                name="favorite"
                size={25}
                style={{ color: focused ? "white" : "red" }}
              />
              <Text
                style={{
                  color: focused ? "white" : "red",
                  fontSize: responsiveFontSize(1.5),
                  fontWeight:"600",
                  marginTop: responsiveHeight(0.5),
                }}
              >
                SAVE
              </Text>
            </View>
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(1),
                width:responsiveWidth(20)
              }}
            >
              <FontAwesome6
                name="user"
                size={25}
                style={{ color: focused ? "white" : "red" }}
              />
              <Text
                style={{
                  color: focused ? "white" : "red",
                  fontSize: responsiveFontSize(1.5),
                  marginTop: responsiveHeight(0.5),
                  fontWeight:"600",
                }}
              >
                PROFILE
              </Text>
            </View>
          ),
        }} />
    </Tab.Navigator>
  );
};

export default Tabs;
