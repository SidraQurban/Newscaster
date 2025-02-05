import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import GlobalApi from '../services/GlobalApi'

const SaveScreen = () => {
  const {isDarkMode} = useTheme();
  const [bookmarkNews, setBookmarkNews] = useState([]);
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchBookmark();
   
  }, []);
  const fetchBookmark = async () => {
    const savedNews = await AsyncStorage.getItem('bookmark');
    if (savedNews) {
      setBookmarkNews(JSON.parse(savedNews)); // Directly set saved articles
    } else {
      setBookmarkNews([]);
    }
    setIsLoading(false);
  };
  
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
      <FlatList
        data={bookmarkNews}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { news: item })}
          >
            <Image
              source={{ uri: item.urlToImage }}
              style={{
                height: responsiveHeight(20),
                width: responsiveWidth(40),
                marginTop: responsiveHeight(1),
                borderRadius: responsiveHeight(2),
                marginBottom: responsiveHeight(2),
                resizeMode: "cover",
              }}
            />
            <View
              style={{
                position: "absolute",
                marginLeft: responsiveWidth(43),
              }}
            >
              <Text
                style={{ marginTop: responsiveHeight(2), color: "#979dac" }}
              >
                {item.source.name}
              </Text>
              <Text
                style={{
                  marginTop: responsiveHeight(1),
                  fontWeight: "600",
                  fontSize: responsiveFontSize(2),
                  color: isDarkMode ? "#e9ecef" : "black",
                }}
              >
                {item.title.split(" - ")[0]}
              </Text>
              <Text
                style={{
                  marginTop: responsiveHeight(2),
                  fontSize: responsiveFontSize(1.5),
                  color: isDarkMode ? "#e9ecef" : "black",
                }}
              >
                {item.publishedAt.slice(0, 10)}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default SaveScreen