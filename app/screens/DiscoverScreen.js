import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import {Ionicons} from "react-native-vector-icons"
import { useNavigation } from '@react-navigation/native'
import { categories } from '../Constant'
const DiscoverScreen = () => {
const navigation = useNavigation();
const [text,setText] = useState("");
const [selectedCategory, setSelectedCategory] = useState(null);

return (
  <View style={{ padding: responsiveWidth(3) }}>
    <SafeAreaView>
      {/* goback icon */}
      <View
        style={{
          backgroundColor: "#dee2e6",
          height: responsiveHeight(5),
          width: responsiveHeight(5),
          borderRadius: responsiveHeight(2.8),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: "white",
            height: responsiveHeight(4.5),
            width: responsiveHeight(4.5),
            borderRadius: responsiveHeight(2.5),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    {/* Discover */}
    <View style={{ padding: responsiveWidth(1) }}>
      <View style={{ marginTop: responsiveHeight(2) }}>
        <Text style={{ fontSize: responsiveFontSize(2.7), fontWeight: "bold" }}>
          Discover
        </Text>
      </View>
      <Text style={{ fontSize: responsiveFontSize(1.8), color: "#979dac" }}>
        News from all around the world
      </Text>
      <View style={{ marginTop: responsiveHeight(3) }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#e9ecef",
            borderRadius: responsiveHeight(4),
            paddingHorizontal: responsiveWidth(5),
            height: responsiveHeight(6.3),
          }}
        >
          <Ionicons
            name="search"
            size={20}
            color="#979dac"
            style={{ marginRight: responsiveWidth(2) }}
          />

          <TextInput
            placeholder="Search"
            text={text}
            onChangeText={setText}
            style={{
              fontSize: responsiveFontSize(2),
            }}
          />
        </View>
      </View>
    </View>
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => setSelectedCategory(item.id)}
          style={{
            marginTop: responsiveHeight(2.5),
            marginRight: responsiveWidth(2),
            backgroundColor:
              selectedCategory === item.id ? "#2196f3" : "#e9ecef",
            height: responsiveHeight(5),
            alignItems: "center",
            justifyContent: "center",
            width: responsiveHeight(13),
            borderRadius: responsiveHeight(4),
          }}
        >
          <Text style={{ color: 
             selectedCategory === item.id ? "#fff" : "#979dac",
             fontSize: responsiveFontSize(1.8) }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  </View>
);
}

export default DiscoverScreen