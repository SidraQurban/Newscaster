import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons, Ionicons, Fontisto } from "react-native-vector-icons";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import ImageList from "../components/ImageList";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeProvider";

const HomeScreen = () => {
const navigation = useNavigation();
const {isDarkMode} = useTheme();
  return (
    <View
      style={{
        padding: responsiveWidth(3),
        backgroundColor: isDarkMode ? "#212529" : "#f8f9fa",
      }}
    >
      {/* Header */}
      <FlatList
        ListHeaderComponent={
          <SafeAreaView>
            <View
              style={{
                backgroundColor: isDarkMode? "#343a40" :"#dee2e6",
                height: responsiveHeight(5),
                width: responsiveHeight(5),
                borderRadius: responsiveHeight(2.8),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: isDarkMode ? "#212529" : "white",
                  height: responsiveHeight(4.5),
                  width: responsiveHeight(4.5),
                  borderRadius: responsiveHeight(2.5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="menu"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: responsiveWidth(1),
                marginTop: responsiveHeight(-5),
                marginLeft: responsiveWidth(72),
                backgroundColor: isDarkMode? "#343a40" :"#dee2e6",
                height: responsiveHeight(5),
                width: responsiveHeight(11),
                borderRadius: responsiveHeight(2.8),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("Discover")}
                style={{
                  backgroundColor: isDarkMode ? "#212529" : "white",
                  height: responsiveHeight(4.7),
                  width: responsiveHeight(4.7),
                  borderRadius: responsiveHeight(2.5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="search"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: isDarkMode ? "#212529" : "white",
                  height: responsiveHeight(4.7),
                  width: responsiveHeight(4.7),
                  borderRadius: responsiveHeight(2.5),
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Fontisto
                  name="bell"
                  size={20}
                  color={isDarkMode ? "white" : "black"}
                />
                {/* Red dot */}
                <View
                  style={{
                    position: "absolute",
                    top: 9,
                    right: 9,
                    width: 6.5,
                    height: 6.5,
                    borderRadius: 3.5,
                    backgroundColor: "red",
                  }}
                />
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        }
        ListFooterComponent={<ImageList />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

          
HomeScreen.navigationOptions = {
export default HomeScreen;
