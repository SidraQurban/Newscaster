import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useTheme } from '../ThemeProvider';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const SaveScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const navigation = useNavigation();
  
  return (
    <SafeAreaView  style={{
          padding: responsiveWidth(3),
           backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
        }}>
      <View>
         {/* Header */}
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
             {/* Saved Section */}
            <View
              style={{
                padding: responsiveWidth(1),
                marginTop: responsiveHeight(2),
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2.7),
                  fontWeight: "bold",
                  color: isDarkMode ? "white" : "black",
                }}
              >
                Saved
              </Text>
              </View>
      </View>
    </SafeAreaView>
  );
}

export default SaveScreen