import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Settings from '../components/Settings';
import { useTheme } from '../ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "react-native-vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingsScreen = () => {
  const {isDarkMode} = useTheme();
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
        height: responsiveHeight(100),
      }}
    >
      {/* header */}
       <SafeAreaView
            style={{
              padding: responsiveWidth(3),
              backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
            }}
          >
      <View
        style={{
          backgroundColor: isDarkMode ? "#343a40" : "#dee2e6",
          height: responsiveHeight(5),
          width: responsiveHeight(5),
          borderRadius: responsiveHeight(2.8),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: isDarkMode ? "#212529" : "white",
            height: responsiveHeight(4.5),
            width: responsiveHeight(4.5),
            borderRadius: responsiveHeight(2.5),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkMode ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      </SafeAreaView>
      <View
        style={{
          padding: responsiveWidth(1),
          marginTop: responsiveHeight(1),
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
            marginLeft:responsiveWidth(3)
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