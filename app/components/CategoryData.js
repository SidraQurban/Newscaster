import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { categories } from '../Constant';

const CategoryData = ({ selectCategory, newsList }) => {
  const [active, setActive] = useState(1);

  return (
    <View style={{ marginTop: responsiveHeight(1) }}>
      {/* Category List */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => { 
              setActive(item.id); 
              selectCategory(item.name);
            }}
            style={{
              marginTop: responsiveHeight(2.5),
              marginRight: responsiveWidth(2),
              backgroundColor: item.id === active ? "#2196f3" : "#e9ecef",
              height: responsiveHeight(5),
              alignItems: "center",
              justifyContent: "center",
              width: responsiveHeight(11),
              borderRadius: responsiveHeight(4),
            }}
          >
            <Text
              style={{
                color: item.id === active ? "#fff" : "#979dac",
                fontSize: responsiveFontSize(1.8),
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      
      {/* News List */}
      <FlatList
        data={newsList}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Detail", {news: item})}>
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
              <Text style={{ marginTop: responsiveHeight(2), color: "#979dac" }}>
                {item.source.name}
              </Text>
              <Text
                style={{
                  marginTop: responsiveHeight(1),
                  fontWeight: "600",
                  fontSize: responsiveFontSize(2),
                }}
              >
                {item.title.split(" - ")[0]}
              </Text>
              <Text
                style={{
                  marginTop: responsiveHeight(2),
                  fontSize: responsiveFontSize(1.5),
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
