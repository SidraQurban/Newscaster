import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveHeight } from 'react-native-responsive-dimensions';

const SaveScreen = () => {
  return (
    <SafeAreaView>
       <View
            style={{
              marginTop: responsiveHeight(1.6),
              padding: responsiveHeight(2),
              backgroundColor: isDarkMode ? "#212529" : "white",
            }}
          >
        <Text>SaveScreen</Text>
      </View>
    </SafeAreaView>
  );
}

export default SaveScreen