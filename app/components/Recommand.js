import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useNavigation } from '@react-navigation/native'

const Recommand = () => {
const navigation = useNavigation();
const [newsList, setNewsList] = useState([])    
useEffect (() => {
getTopHeadline()
},[])

const getTopHeadline = async () => {
  const result = (await GlobalApi.getTopHeadline).data;
  setNewsList(result.articles);
};
  return (
    <View style={{ marginTop: responsiveHeight(3) }}>
      {/* text */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>
          Recommandation
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("Discover")} >
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
      {/* news list */}
      <View>
        <FlatList
          data={newsList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>navigation.navigate("Detail", {news:item})}>
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
    </View>
  );
}

export default Recommand