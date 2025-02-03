import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import GlobalApi from '../services/GlobalApi'
import { Image } from 'react-native'

const ImageList = () => {
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
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: "#979dac",
            fontWeight: "600",
          }}
        >
          Show More
        </Text>
      </View>
      {/* images */}
      <View>
        <FlatList
          data={newsList}
          horizontal
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
                  height: responsiveHeight(30),
                  borderRadius: responsiveHeight(2),
                }}
              />
              <View style={{flexDirection:"row"}}> 
              <Image
                source={require("../../assets/world.png")}
                style={{ height: responsiveHeight(2), resizeMode: "contain" }}
              />
              <Text
                // style={{
                //   height: responsiveHeight(3),
                //   backgroundColor: "#2196f3",
                //   width: responsiveWidth(20),
                // }}
              >
                World
              </Text>
              </View>
             
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default ImageList;