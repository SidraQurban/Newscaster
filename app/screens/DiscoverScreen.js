import { 
  View, Text, TouchableOpacity, TextInput, FlatList, 
  ActivityIndicator
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { 
  responsiveFontSize, responsiveHeight, responsiveWidth 
} from 'react-native-responsive-dimensions';
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import { categories } from '../Constant';
import GlobalApi from '../services/GlobalApi';
import CategoryData from '../components/CategoryData';

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState(""); 
  const [newsList, setNewsList] = useState([]);
  const [filteredNewsList, setFilteredNewsList] = useState([]);
    const [active, setActive] = useState(1);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsByCategory('Sports');
  }, []);

  // Fetch news based on category
  const getNewsByCategory = async (category) => {
    setLoading(true); 
    const result = (await GlobalApi.getNewsByCategory(category)).data;
    setNewsList(result.articles);
    setFilteredNewsList(result.articles); // Set initial filtered list
    setLoading(false);
  };

  // Filter news list based on search text
  const handleSearch = (text) => {
    setText(text);
    if (text === "") {
      setFilteredNewsList(newsList); // If search is empty, show all articles
    } else {
      const filtered = newsList.filter(
        (item) =>
          (item.title &&
            item.title.toLowerCase().includes(text.toLowerCase())) || // Filter based on title
          (item.source &&
            item.source.name &&
            item.source.name.toLowerCase().includes(text.toLowerCase())) // Filter based on source name
      );
      setFilteredNewsList(filtered); // Set the filtered news list
    }
  };

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

            {/* Discover Section */}
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

            {/* Search Bar */}
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
                  onChangeText={handleSearch} // Update search text and filter list
                  style={{
                    fontSize: responsiveFontSize(2),
                    flex: 1,
                  }}
                />
              </View>
               {/* Category List */}
                    <FlatList
                      data={categories}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      renderItem={({ item }) => (
                        <TouchableOpacity
                          onPress={() => { 
                            setActive(item.id); 
                            selectCategory(item.name);
                          }}
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
            </View>

            {/* Show loading or the filtered data */}
            {loading ? (
              <ActivityIndicator color="blue" size="30" />
            ) : filteredNewsList.length === 0 ? (
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  color: "gray",
                  textAlign: "center",
                  marginTop: responsiveHeight(3),
                }}
              >
                Result not found
              </Text>
            ) : (
              <CategoryData
                selectCategory={getNewsByCategory}
                newsList={filteredNewsList} // Pass the filtered list
                setNewsList={setNewsList}
              />
            )}
          </>
        }
      />
    </SafeAreaView>
  );
}

export default DiscoverScreen;
