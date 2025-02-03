import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions'

const Recommand = () => {
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
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: responsiveFontSize(2.5), fontWeight: "bold" }}>
          Recommandation
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
    </View>
  );
}

export default Recommand