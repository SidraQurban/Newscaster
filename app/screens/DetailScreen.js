import { View, Text, Image, TouchableOpacity, Share, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import GlobalApi from '../services/GlobalApi';
import { useNavigation, useRoute } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import{ Ionicons,Entypo,MaterialIcons} from "react-native-vector-icons"

const DetailScreen = () => {
const news = useRoute().params.news;
const navigation = useNavigation();
useEffect(() => {
  console.log(news);
}, []);

const shareNews = () => {
  Share.share({
    message: news.title + "\nRead More" + news.description,
  });
}

const Readmore = () => {
  Linking.openURL(news.url);
};
  return (
    <View style={{ padding: responsiveWidth(3) }}>
      <SafeAreaView>
        {/* goback icon */}
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
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: "white",
              height: responsiveHeight(4.5),
              width: responsiveHeight(4.5),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="chevron-back" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {/* share icon */}
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
            <MaterialIcons name="favorite-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => shareNews()}
            style={{
              backgroundColor: "white",
              height: responsiveHeight(4.7),
              width: responsiveHeight(4.7),
              borderRadius: responsiveHeight(2.5),
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="share" size={20} color="black" />
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
          }}
        >
          {news.description}
        </Text>
      </View>
      {/* content */}
      <View style={{ marginTop: responsiveHeight(2) }}>
        <Text style={{ fontSize: responsiveFontSize(2.2), fontWeight: "500" }}>
          {news.content.split("[",)[0]}
        </Text>
      </View>
      {/* Read more */}
      <TouchableOpacity 
      onPress={() =>Readmore()}
      style={{ marginTop: responsiveHeight(1) }}>
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
  );
}

export default DetailScreen;