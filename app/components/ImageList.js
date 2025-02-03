import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ImageList = () => {
  return (
    <View style={{ padding: responsiveWidth(2) }}>
        <View style={{marginTop:responsiveHeight(2), flexDirection:"row", justifyContent:"space-between"}}>
        <Text style={{fontSize:responsiveFontSize(2.5), fontWeight:"bold"}}>Breaking News</Text>
       <Text>Show more</Text>
        </View>
    
    </View>
  )
}

export default ImageList