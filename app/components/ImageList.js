import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import GlobalApi from '../services/GlobalApi'
import { Image } from 'react-native'
import Recommand from './Recommand'
import { useNavigation } from '@react-navigation/native'

const ImageList = () => {
const navigation = useNavigation();
const [newsList, setNewsList] = useState([])    
useEffect (() => {
getTopHeadline()
},[])

const getTopHeadline =async () =>{
const result = (await GlobalApi.getTopHeadline).data;
setNewsList(result.articles)
}

  return (
    <View style={{ padding: responsiveWidth(2) }}>
      {/* text */}
      <View
        style={{
          marginTop: responsiveHeight(2),
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>
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
      {/* Recommendation */}
      <Recommand />
      <View></View>
    </View>
  );
}

export default ImageList;