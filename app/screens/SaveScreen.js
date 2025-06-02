import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useTheme } from '../ThemeProvider';

const SaveScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <SafeAreaView>
      <View
        style={{
          padding: responsiveWidth(3),
          //  backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
        }}
      >
        <View>
 <Text>SaveScreen</Text>
        </View>
       
      </View>
    </SafeAreaView>
  );
}

export default SaveScreen