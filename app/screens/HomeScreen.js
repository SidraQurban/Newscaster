import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {MaterialCommunityIcons, Ionicons, Fontisto} from "react-native-vector-icons"
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import ImageList from '../components/ImageList'
const HomeScreen = () => {
  return (
    <View style={{ padding: responsiveWidth(2) }}>
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "#dee2e6",
            height: responsiveHeight(5),
            width: responsiveHeight(5),
            borderRadius: responsiveHeight(2.8),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: responsiveHeight(4.5),
              width: responsiveHeight(4.5),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons name="menu" size={20} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: responsiveWidth(1),
            marginTop: responsiveHeight(-5),
            marginLeft: responsiveWidth(72),
            backgroundColor: "#dee2e6",
            height: responsiveHeight(5),
            width: responsiveHeight(11),
            borderRadius: responsiveHeight(2.8),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: responsiveHeight(4.7),
              width: responsiveHeight(4.7),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "white",
              height: responsiveHeight(4.7),
              width: responsiveHeight(4.7),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fontisto name="bell" size={20} color="black" />
            {/* Red dot */}
            <View
              style={{
                position: "absolute",
                top: 9, // Adjust the position of the red dot
                right: 9, // Adjust the position of the red dot
                width: 6.5, // Size of the red dot
                height: 6.5, // Size of the red dot
                borderRadius: 3.5, // Make it round
                backgroundColor: "red", // Red color
              }}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* body */}
     <ImageList/>
    </View>
  );
}

export default HomeScreen