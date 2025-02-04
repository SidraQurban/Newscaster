import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Ionicons , MaterialIcons} from "react-native-vector-icons";
import { useTheme } from '../ThemeProvider';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
const navigation = useNavigation();
const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View
      style={{
        marginTop: responsiveHeight(1.6),
        padding: responsiveHeight(2),
        backgroundColor:  isDarkMode ? "#212529" : "white",
      }}
    >
      <View style={{ height: responsiveHeight(70), }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
            marginTop:responsiveHeight(5)
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(2), fontWeight: "500" , color: isDarkMode ? "white" : "black", }}
          >
            About
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* feedback */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: "500",
              color: isDarkMode ? "white" : "black",
            }}
          >
            Send Feedback
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* privacy */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(2), fontWeight: "500",  color: isDarkMode ? "white" : "black", }}
          >
            Privacy Policy
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* Terms */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(2), fontWeight: "500",  color: isDarkMode ? "white" : "black", }}
          >
            Terms of Use
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* Mode */}
        <TouchableOpacity
          onPress={toggleTheme}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(2), fontWeight: "500",  color: isDarkMode ? "white" : "black", }}
          >
            Dark Mode
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#3e3e3e" }}
            thumbColor={isDarkMode ? "black" : "#f4f3f4"}
            onValueChange={toggleTheme}
            value={isDarkMode}
            style={{
              marginBottom: responsiveHeight(-3.5),
              marginRight: responsiveWidth(-3),
              marginTop: responsiveHeight(-2.2),
            }}
          />
        </TouchableOpacity>
        {/* Logout */}
        <TouchableOpacity
        onPress={() =>navigation.navigate("Welcome")}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: isDarkMode ? "#212529" : "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2.6),
            borderBottomColor: "#dee2e6",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              fontWeight: "500",
              color: "red",
            }}
          >
            Logout
          </Text>
          <MaterialIcons name="logout" size={16} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settings