import { 
  View, Text, TouchableOpacity, TextInput, FlatList 
} from 'react-native';
import React, { act, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  responsiveFontSize, responsiveHeight, responsiveWidth 
} from 'react-native-responsive-dimensions';
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { categories } from '../Constant';
import Recommand from '../components/Recommand';

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");

  const [active, setActive] = useState(1);
  return (
    <SafeAreaView style={{ padding: responsiveWidth(3) }}>
      <FlatList
        data={categories}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <>
            {/* Header */}
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

            {/*Discover Section */}
            <View
              style={{
                padding: responsiveWidth(1),
                marginTop: responsiveHeight(2),
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(2.7),
                  fontWeight: "bold",
                }}
              >
                Discover
              </Text>
              <Text
                style={{ fontSize: responsiveFontSize(1.8), color: "#979dac" }}
              >
                News from all around the world
              </Text>
            </View>

            {/*  Search Bar */}
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
                  value={text}
                  onChangeText={setText}
                  style={{
                    fontSize: responsiveFontSize(2),
                    flex: 1,
                  }}
                />
              </View>
            </View>

            {/*  Category List */}
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                onPress={() => setActive(item.id)}
                
                  style={{
                    marginTop: responsiveHeight(2.5),
                    marginRight: responsiveWidth(2),
                    backgroundColor: item.id === active ? "#2196f3" : "#e9ecef",

                    height: responsiveHeight(5),
                    alignItems: "center",
                    justifyContent: "center",
                    width: responsiveHeight(11),
                    borderRadius: responsiveHeight(4),
                  }}
                >
                  <Text
                    style={{
                      color: item.id === active ? "#fff" : "#979dac",
                      fontSize: responsiveFontSize(1.8),
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />

            {/* Recommended News Section */}
            <View style={{ marginTop: responsiveHeight(1) }}>
              <Recommand />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
}

export default DiscoverScreen;
