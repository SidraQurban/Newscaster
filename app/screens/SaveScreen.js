import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useTheme } from '../ThemeProvider'
import { Image } from 'react-native'
import GlobalApi from '../services/GlobalApi'

const SaveScreen = () => {
  const {isDarkMode} = useTheme()
  const [newsList, setNewsList] = useState([]);
  useEffect (() => {
    getTopHeadline()
    },[])
    
    const getTopHeadline = async () => {
      const result = (await GlobalApi.getTopHeadline).data;
      setNewsList(result.articles);
    };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "#212529" : "neutral",
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
      data={newsList}
      renderItem={({item}) => (
        <View style={{ flexDirection: "row" }}>
        <Image
          source={{uri:item.urlToImage}}
          style={{
            height: responsiveHeight(25),
            width: responsiveWidth(50),
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            marginTop: responsiveHeight(6),
            color: isDarkMode ? "white" : "black",
            fontSize:responsiveFontSize(2),
            fontWeight:"500"
          }}
        >
          hbjhnkjhbnm
        </Text>
      </View> 
      )}
      />

     
    </View>
  );
}

export default SaveScreen