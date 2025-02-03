import { View, Text } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const ImageList = () => {
  return (
    <View style={{ padding: responsiveWidth(2) }}>
        <View style={{marginTop:responsiveHeight(3)}}>
        <Text style={{}}>Breaking News</Text>
        </View>
    
    </View>
  )
}

export default ImageList