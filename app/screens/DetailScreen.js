import { View, Text, Image, TouchableOpacity, Share, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Ionicons, Entypo, MaterialIcons } from "react-native-vector-icons"
import { useTheme } from '../ThemeProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useRoute, useNavigation } from '@react-navigation/native'

const DetailScreen = () => {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  const { isDarkMode } = useTheme();
  const [bookmark, setBookmark] = useState(false); // To track if the news is bookmarked

  useEffect(() => {
    checkIfBookmarked(); // Check if the news is already bookmarked when the screen loads
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      checkIfBookmarked(); // Re-check bookmark status when the screen is focused
    }, [news])
  );

  const checkIfBookmarked = async () => {
    const bookmarks = await AsyncStorage.getItem('@bookmarkNews');
    const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const isBookmarked = parsedBookmarks.some(item => item.title === news.title);
    setBookmark(isBookmarked);
  };

  const saveBookmark = async () => {
    const bookmarks = await AsyncStorage.getItem('@bookmarkNews');
    const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];

    if (!parsedBookmarks.some(item => item.title === news.title)) {
      parsedBookmarks.push(news); // Add current news to the bookmarks list
      await AsyncStorage.setItem('@bookmarkNews', JSON.stringify(parsedBookmarks));
      setBookmark(true);
      alert('News saved!');
    }
  };

  const removeBookmark = async () => {
    const bookmarks = await AsyncStorage.getItem('@bookmarkNews');
    const parsedBookmarks = bookmarks ? JSON.parse(bookmarks) : [];
    const updatedBookmarks = parsedBookmarks.filter(item => item.title !== news.title); // Remove current news
    await AsyncStorage.setItem('@bookmarkNews', JSON.stringify(updatedBookmarks));
    setBookmark(false);
    alert('News unsaved!');
  };

  const shareNews = () => {
    Share.share({
      message: news.title + "\nRead More: " + news.description,
    });
  };

  const Readmore = () => {
    Linking.openURL(news.url);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          padding: responsiveWidth(3),
          backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
          height: responsiveHeight(100)
        }}
      >
        <SafeAreaView>
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={20}
                color={isDarkMode ? "white" : "black"}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        {/* Share and Bookmark Icons */}
        <View
          style={{
            flexDirection: "row",
            gap: responsiveWidth(1),
            marginTop: responsiveHeight(-5),
            marginLeft: responsiveWidth(72),
            backgroundColor: isDarkMode ? "#343a40" : "#dee2e6",
            height: responsiveHeight(5),
            width: responsiveHeight(11),
            borderRadius: responsiveHeight(2.8),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              bookmark ? removeBookmark() : saveBookmark();
            }}
            style={{
              backgroundColor: isDarkMode ? "#212529" : "white",
              height: responsiveHeight(4.7),
              width: responsiveHeight(4.7),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons
              name={bookmark ? "favorite" : "favorite-outline"}
              size={20}
              color={bookmark ? "red" : isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={shareNews}
            style={{
              backgroundColor: isDarkMode ? "#212529" : "white",
              height: responsiveHeight(4.7),
              width: responsiveHeight(4.7),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo
              name="share"
              size={20}
              color={isDarkMode ? "white" : "black"}
            />
          </TouchableOpacity>
        </View>

        {/* News details */}
        <Text
          style={{
            fontSize: responsiveFontSize(2.7),
            fontWeight: "600",
            color: isDarkMode ? "#e9ecef" : "black",
            marginTop: responsiveHeight(2),
          }}
        >
          {news.title.split(" - ")[0]}
        </Text>

        {/* News image */}
        <Image
          source={{ uri: news.urlToImage }}
          style={{
            height: responsiveHeight(35),
            borderRadius: responsiveWidth(5),
            marginTop: responsiveHeight(2),
          }}
        />

        {/* Description */}
        <Text
          style={{
            fontSize: responsiveFontSize(2.2),
            fontWeight: "500",
            color: isDarkMode ? "#e9ecef" : "black",
            marginTop: responsiveHeight(2),
          }}
        >
          {news.description}
        </Text>

        {/* Content */}
        <Text
          style={{
            fontSize: responsiveFontSize(2.2),
            fontWeight: "500",
            color: isDarkMode ? "#e9ecef" : "black",
            marginTop: responsiveHeight(2),
          }}
        >
          {news.content.split("[")[0]}
        </Text>

        {/* Read more */}
        <TouchableOpacity onPress={Readmore} style={{ marginTop: responsiveHeight(1) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "bold",
              color: "#2196f3",
            }}
          >
            Read More
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailScreen
