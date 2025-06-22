import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const WelcomeScreen = () => {
const navigation = useNavigation();
useEffect(() => {
  setTimeout(() => {
    navigation.navigate("tab")
  }, 2000);
}, [])

  return (
    <View style={{ flex: 1, backgroundColor: "#eaf4f4" }}>
      <SafeAreaView>
        <View>
          <Animatable.Text
            style={{
              alignSelf: "center",
              marginTop: responsiveHeight(20),
              fontSize: responsiveFontSize(3),
              fontWeight: "bold",
            }}
            animation="fadeInDownBig"
            duration={2000}
          >
            Welcome to Newscaster
          </Animatable.Text>
          
          <Animatable.Image
            source={require("../../assets/welcome1.png")}
            style={{
              height: responsiveHeight(32),
              width: responsiveWidth(100),
              marginTop: responsiveHeight(5),
              resizeMode: "cover",
              marginLeft:responsiveWidth(-1)
            }}
            animation="fadeInDownBig"
            duration={2000}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default WelcomeScreen;