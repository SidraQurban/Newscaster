import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import SaveScreen from "../screens/SaveScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Ionicons, Fontisto, FontAwesome5 } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabButton = (props) => (
  <TouchableOpacity
    {...props}
    activeOpacity={1} // Prevents the grey ripple effect
  />
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "white",
          height: responsiveHeight(10),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(2),
                width: responsiveWidth(20),
              }}
            >
              <Ionicons
                name="home"
                size={25}
                color={focused ? "#2196f3" : "#979dac"}
              />
              <Text
                style={{
                  color: focused ? "#2196f3" : "#979dac",
                  fontSize: responsiveFontSize(1.7),
                  fontWeight: "600",
                  marginTop: responsiveHeight(0.5),
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(2),
                width: responsiveWidth(20),
              }}
            >
              <Fontisto
                name="world"
                size={25}
                color={focused ? "#2196f3" : "#979dac"}
              />
              <Text
                style={{
                  color: focused ? "#2196f3" : "#979dac",
                  fontSize: responsiveFontSize(1.7),
                  marginTop: responsiveHeight(0.5),
                  fontWeight: "600",
                }}
              >
                Discover
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Save"
        component={SaveScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(2),
                width: responsiveWidth(20),
              }}
            >
              <Fontisto
                name="favorite"
                size={25}
                color={focused ? "#2196f3" : "#979dac"}
              />
              <Text
                style={{
                  color: focused ? "#2196f3" : "#979dac",
                  fontSize: responsiveFontSize(1.7),
                  fontWeight: "600",
                  marginTop: responsiveHeight(0.5),
                }}
              >
                Saved
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarButton: CustomTabButton,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: responsiveHeight(2),
                width: responsiveWidth(20),
              }}
            >
              <FontAwesome5
                name="user-alt"
                size={25}
                color={focused ? "#2196f3" : "#979dac"}
              />
              <Text
                style={{
                  color: focused ? "#2196f3" : "#979dac",
                  fontSize: responsiveFontSize(1.7),
                  marginTop: responsiveHeight(0.5),
                  fontWeight: "600",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
