import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useTheme } from '../ThemeProvider';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "react-native-vector-icons";

const SaveScreen = () => {
  const {isDarkMode} = useTheme();
  const navigation = useNavigation();  
  
   return (
     <View
       style={{
         backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
         height: responsiveHeight(100),
       }}
     >
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
             marginLeft: responsiveWidth(3),
           }}
         >
           Saved
         </Text>
       </View>
       {/* body */}

       <View style={{ marginTop: responsiveHeight(2) }}>
         <Image
           source={require("../../assets/1.jpeg")}
           style={{
             height: responsiveHeight(20),
             width: responsiveWidth(50),
             borderRadius: responsiveHeight(2),
             resizeMode: "cover",
             marginLeft: responsiveWidth(3),
           }}
         />
         <Text
           style={{
             position: "absolute",
             marginLeft: responsiveWidth(56),
             color:isDarkMode ? "white" :"black",
             fontSize: responsiveFontSize(2),
             fontWeight:"500"
           }}
         >
           The Take: How will President Ahmed Al-Sharaa shape Syria's future?
         </Text>
       </View>
     </View>
   );
}

export default SaveScreen