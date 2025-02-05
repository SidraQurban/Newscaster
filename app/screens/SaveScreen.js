import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SaveScreen = () => {
  const {isDarkMode} = useTheme();
  const [bookmarkNews, setBookmarkNews] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookmark();
   
  }, []);
  const fetchBookmark = async() =>{
    await AsyncStorage.getItem('bookmark').then((token) =>{
      const res = JSON.parse(token);
      if ( res ){
        console.log("Bookmark res",res);
        let query_string = res.join(',')
          console.log("query_string:", query_string)
        
      }
    })
  }

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
          Saved
        </Text>
      </View>
      {/* body */}

      <View style={{ flexDirection: "row" }}>
        <Image
          source={require("../../assets/welcome1.png")}
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
            fontSize:responsiveFontSize(2),
            fontWeight:"500"
          }}
        >
          hbjhnkjhbnm
        </Text>
      </View>
    </View>
  );
}

export default SaveScreen