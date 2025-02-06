import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobalApi from '../services/GlobalApi'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "react-native-vector-icons";

const SaveScreen = () => {
  const {isDarkMode} = useTheme();
  const navigation = useNavigation();  
  const [bookmarkNews, setBookmarkNews] =useState([]); 
  
   return (
     <View
       style={{
         backgroundColor: isDarkMode ? "#212529" : "neutral",
         height: isDarkMode ? responsiveHeight(100) : "auto",
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
           Settings
         </Text>
       </View>
       {/* body */}
       <FlatList
         data={bookmarkNews}
         renderItem={({ item }) => (
           <View style={{ flexDirection: "row" }}>
             <Image
               source={{ uri: item.urlToImage }}
               style={{
                 height: responsiveHeight(25),
                 width: responsiveWidth(50),
                 resizeMode: "contain",
               }}
             />
             <Text
               style={{
                 marginTop: responsiveHeight(6),
                 color: isDarkMode ? "white" : "black",
                 fontSize: responsiveFontSize(2),
                 fontWeight: "500",
               }}
             >
               {item.title}
             </Text>
           </View>
         )}
       />
     </View>
   );
}

export default SaveScreen