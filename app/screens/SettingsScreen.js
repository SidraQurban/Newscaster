import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Settings from '../components/Settings';
import { useTheme } from '../ThemeProvider';

const SettingsScreen = () => {
  const {isDarkMode} = useTheme()
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
        height: isDarkMode ? responsiveHeight(100) : "auto",
      }}
    >
      <View
        style={{
          backgroundColor: isDarkMode ? "#212529" : "white",
          height: responsiveHeight(10),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.2),
            fontWeight: "bold",
            marginTop: responsiveHeight(2),
            color: isDarkMode ? "white" : "black",
          }}
        >
          Settings
        </Text>
      </View>
      {/* body */}
      <Settings />
    </View>
  );
}

export default SettingsScreen