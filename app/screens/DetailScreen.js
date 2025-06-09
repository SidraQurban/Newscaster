import { View, Text, Image, TouchableOpacity, Share, Linking, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalApi from '../services/GlobalApi';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import{ Ionicons,Entypo,MaterialIcons} from "react-native-vector-icons"
import { useTheme } from '../ThemeProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = () => {
const news = useRoute().params.news;
const navigation = useNavigation();
const { isDarkMode } = useTheme();
const [fav,setFav] = useState(null);
const [bookmark,setBookmark] = useState(false);

useEffect(() => {
  console.log(news);
}, []);

useFocusEffect(
  React.useCallback(() => {
    if (news) {
      renderBookmark(news.title);  
    }
  }, [news]) 
);

const shareNews = () => {
  Share.share({
    message: news.title + "\nRead More" + news.description,
  });
}

const Readmore = () => {
  Linking.openURL(news.url);
};
const saveBookmark = async (newsTitle) => {
  setBookmark(true);
  await AsyncStorage.getItem("bookmark").then((token) => {
    const res = JSON.parse(token);
    if (res !== null) {
      let data = res.find((value) => value === newsTitle);
      if (data == null) {
        res.push(newsTitle);
        AsyncStorage.setItem("bookmark", JSON.stringify(res));
        alert("News Saved!");
      }
    } else {
      let bookmark = [];
      bookmark.push(newsTitle);
      AsyncStorage.setItem("bookmark", JSON.stringify(bookmark));
      alert("News Saved!");
    }
  });
};

const removeBookmark =async (newsTitle) => {
setBookmark(false);
const bookmark = await AsyncStorage.getItem("bookmark").then((token) => {
  const res = JSON.parse(token);
  return res.filter((title) => title !== newsTitle);
} )
await AsyncStorage.setItem("bookmark",JSON.stringify(bookmark));
alert("News unsaved")
};

const renderBookmark = async (newsTitle) => {
  await AsyncStorage.getItem("bookmark").then((token) => {
    const res = JSON.parse(token);
    if (res != null) {
      let data = res.find((value) => value === newsTitle);
      return data == null ? setBookmark(false) : setBookmark(true);
    }
  });
}
     <TouchableOpacity
         onPress={() => {
           setFav(fav === news.title ? null : news.title);
           saveBookmark(news.title);
         }}
       >
       <Text>Save</Text>
     </TouchableOpacity>

  return (
     <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        height: "100%",
        backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
      }}
    >

      <View
        style={{
          padding: responsiveWidth(3),
          backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
          height: responsiveHeight(100),
        }}
      >
        <SafeAreaView>
          {/* goback icon */}
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
          {/* share icon */}
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
                setFav(fav === news.title ? null : news.title);
                bookmark
                  ? removeBookmark(news.title)
                  : saveBookmark(news.title);
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
              onPress={() => shareNews()}
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
        </SafeAreaView>
        {/* Text */}
        <View style={{ flexDirection: "row", marginTop: responsiveHeight(2) }}>
          <Text
            style={{
              color: "#979dac",
              fontSize: responsiveFontSize(1.6),
            }}
          >
            {news.source.name}
          </Text>
          <Entypo
            name="dot-single"
            color="#979dac"
            size={15}
            style={{
              marginLeft: responsiveWidth(6),
              marginTop: responsiveHeight(0.23),
            }}
          />
          <Text
            style={{
              color: "#979dac",
              fontSize: responsiveFontSize(1.6),
              marginLeft: responsiveWidth(1),
            }}
          >
            {news.publishedAt.slice(0, 10)}
          </Text>
          <Entypo
            name="dot-single"
            color="#979dac"
            size={15}
            style={{
              marginLeft: responsiveWidth(6),
              marginTop: responsiveHeight(0.23),
            }}
          />
          <Text
            style={{
              color: "#979dac",
              fontSize: responsiveFontSize(1.6),
              marginLeft: responsiveWidth(1),
            }}
          >
            {news.publishedAt.slice(11, 19)}
          </Text>
        </View>
        {/* title */}
        <Text
          style={{
            marginTop: responsiveHeight(2),
            fontSize: responsiveFontSize(2.7),
            fontWeight: "600",
            color: isDarkMode ? "#e9ecef" : "black",
          }}
        >
          {news.title.split(" - ")[0]}
        </Text>
        {/* Image */}
        <Image
          source={{ uri: news.urlToImage }}
          style={{
            height: responsiveHeight(35),
            borderRadius: responsiveWidth(5),
            marginTop: responsiveHeight(2),
          }}
        />
        {/* description */}
        <View
          style={{
            marginTop: responsiveHeight(2),
          }}
        >
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "500",
              color: isDarkMode ? "#e9ecef" : "black",
            }}
          >
            {news.description}
          </Text>
        </View>
        {/* content */}
        <View style={{ marginTop: responsiveHeight(2) }}>
          <Text
            style={{
              fontSize: responsiveFontSize(2.2),
              fontWeight: "500",
              color: isDarkMode ? "#e9ecef" : "black",
            }}
          >
            {news.content.split("[")[0]}
          </Text>
        </View>
        {/* Read more */}
        <TouchableOpacity
          onPress={() => Readmore()}
          style={{ marginTop: responsiveHeight(1) }}
        >
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
}

export default DetailScreen;