import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobalApi from '../services/GlobalApi'

const SaveScreen = () => {
  const {isDarkMode} = useTheme();
  const [bookmarkNews, setBookmarkNews] =useState([]); 
  useEffect(() => {
    fetchBookmark()
  }, [])
 
  const fetchBookmark = async () => {
    await AsyncStorage.getItem("bookmark").then(async (token) => {
      const res = JSON.parse(token); // Fetch saved bookmarks from AsyncStorage
      if (res) {
        console.log("Saved bookmarks:", res);
  
        // Create query_string to match against the saved bookmarks
        const query_string = res.join(',');
  
        // Check if the current newsTitle matches any of the saved bookmarks
        // Assuming you have `newsTitle` available from some source, for example, from props or state
        const newsTitle = "Some news title";  // Replace with dynamic newsTitle
  
        if (query_string.includes(newsTitle)) {
          console.log('This news is bookmarked!');
          setBookmarkNews(res); // Set bookmarked news if it exists in saved list
        } else {
          console.log('This news is not bokmarked.');
          setBookmarkNews([]); // Clear the list if no match
        }
      } else {
        setBookmarkNews([]); // No bookmarks saved
      }
    });
  };
  

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "#212529" : "neutral",
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
    <FlatList
     data={bookmarkNews}
     renderItem={({item}) => (
      <View style={{ flexDirection: "row" }}>
      <Image
        source={{uri: item.urlToImage}}
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
       {item.title}
      </Text>
    </View>
     )}
    
    />
     
    </View>
  );
}

export default SaveScreen