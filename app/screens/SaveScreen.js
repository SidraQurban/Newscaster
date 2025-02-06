import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'

const SaveScreen = () => {
  const { isDarkMode } = useTheme();
  const [bookmarkNews, setBookmarkNews] = useState([]);
  const isFocused = useIsFocused(); // This gives a boolean value (true/false)

  useEffect(() => {
    if (isFocused) {
      fetchBookmark(); // Fetch bookmarks only when the screen is focused
    }
  }, [isFocused]); // Re-run when the focus state changes

  const fetchBookmark = async () => {
    try {
      const value = await AsyncStorage.getItem('@bookmarkNews');
      if (value !== null) {
        setBookmarkNews(JSON.parse(value));
      } else {
        setBookmarkNews([]); // No saved bookmarks
      }
    } catch (error) {
      console.error('Error fetching bookmarks: ', error); // Handle any error that occurs
    }
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

      {/* FlatList to render saved bookmarks */}
      <FlatList
        data={bookmarkNews}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}>
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
                marginLeft: responsiveWidth(2),
              }}
            >
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default SaveScreen;
