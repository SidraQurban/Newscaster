import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import GlobalApi from '../services/GlobalApi';
import { Image } from 'react-native';
import Recommand from './Recommand';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../ThemeProvider';

const ImageList = () => {
const {isDarkMode} = useTheme();
const navigation = useNavigation();
const [newsList, setNewsList] = useState([])    
useEffect (() => {
getTopHeadline()
getNewsByCategory('Politic')
},[])

const getNewsByCategory =async (category) =>{
  const result = (await GlobalApi.getNewsByCategory(category)).data;
  setNewsList(result.articles);
  console.log(result)
}

const getTopHeadline =async () =>{
const result = (await GlobalApi.getTopHeadline).data;
setNewsList(result.articles)
}

  return (
    <View
      style={{
        padding: responsiveWidth(1),
        backgroundColor: isDarkMode ? "#212529" : "neutral",
        height: isDarkMode ? responsiveHeight(100) : "auto",
      }}
    >
      {/* Header */}
      <View
        style={{
          marginTop: responsiveHeight(2),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            fontWeight: "bold",
            color: isDarkMode ? "white" : "black",
          }}
        >
          Breaking News
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "#979dac",
              fontWeight: "600",
            }}
          >
            Show More
          </Text>
        </TouchableOpacity>
      </View>
      {/* images */}
      <View>
        <FlatList
          data={newsList}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { news: item })}
              style={{
                marginTop: responsiveHeight(2),
                width: responsiveWidth(80),
                marginRight: responsiveWidth(4),
              }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{
                  height: responsiveHeight(35),
                  borderRadius: responsiveHeight(2),
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  height: responsiveHeight(3.5),
                  width: responsiveWidth(20),
                  backgroundColor: "white",
                  borderRadius: responsiveHeight(1.5),
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: responsiveHeight(22),
                  marginLeft: responsiveWidth(2),
                  position: "absolute",
                }}
              >
                <Image
                  source={require("../../assets/world.png")}
                  style={{
                    height: responsiveHeight(2),
                    resizeMode: "contain",
                    width: responsiveWidth(5),
                    marginRight: responsiveWidth(2),
                  }}
                />
                <Text
                  style={{
                    fontSize: responsiveFontSize(1.7),
                    color: "black",
                    marginRight: responsiveWidth(2),
                  }}
                >
                  World
                </Text>
              </View>
              <Text
                style={{
                  position: "absolute",
                  marginTop: responsiveHeight(27),
                  color: "white",
                  marginLeft: responsiveWidth(2),
                  fontWeight: "600",
                }}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Recommandation Text */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: responsiveHeight(3),
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" , color:isDarkMode?"white":"black"}}>
          Recommandation
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
          <Text
            style={{
              fontSize: responsiveFontSize(2),
              color: "#979dac",
              fontWeight: "600",
            }}
          >
            Show More
          </Text>
        </TouchableOpacity>
      </View>
      {/* Recommendation */}
      <Recommand />
    </View>
  );
}

export default ImageList;