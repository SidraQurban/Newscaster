import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'
import Settings from '../components/Settings';

const SettingsScreen = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          height: responsiveHeight(8),
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.2),
            fontWeight: "bold",
            marginTop: responsiveHeight(2),
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