import { View, Text } from 'react-native'
import React from 'react'
import { responsiveWidth } from 'react-native-responsive-dimensions'

const ImageList = () => {
  return (
    <View style={{ padding: responsiveWidth(2) }}>
      <Text>ImageList</Text>
    </View>
  )
}

export default ImageList