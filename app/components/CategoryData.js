import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../ThemeProvider';

const CategoryData = ({  newsList }) => {
    if (!newsList || !Array.isArray(newsList)) {
        return <Text>No news available</Text>;
      }
  const navigation = useNavigation();
  const {isDarkMode} = useTheme();

  return (
    <View
      style={{
        marginTop: responsiveHeight(1),
        backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
      }}
    >
      {/* News List */}
      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { news: item })}
            style={{ backgroundColor: isDarkMode ? "#212529" : "#f8f9fa" }}
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
};

export default CategoryData;
