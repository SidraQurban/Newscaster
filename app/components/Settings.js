import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Ionicons , MaterialIcons} from "react-native-vector-icons";

const Settings = () => {
const [isEnabled, setIsEnabled] = useState(false)
const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View
      style={{ marginTop: responsiveHeight(1.6), padding: responsiveHeight(2) }}
    >
      <View style={{ height: responsiveHeight(40), backgroundColor: "" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" }}
          >
            About
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* feedback */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" }}
          >
            Send Feedback
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* privacy */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" }}
          >
            Privacy Policy
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* Terms */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" }}
          >
            Terms of Use
          </Text>
          <Ionicons name="chevron-forward" size={16} color="grey" />
        </TouchableOpacity>
        {/* Mode */}
        <TouchableOpacity
        onPress={toggleSwitch}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" }}
          >
            Dark Mode
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#3e3e3e" }}
            thumbColor={isEnabled ? "green" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{
              marginBottom: responsiveHeight(-3.5),
              marginRight: responsiveWidth(-3),
              marginTop: responsiveHeight(-2.2),
            }}
          />
        </TouchableOpacity>
        {/* Logout */}
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",
            paddingHorizontal: responsiveHeight(3),
            paddingVertical: responsiveHeight(2),
            borderBottomColor: "grey",
            borderBottomWidth: 1,
          }}
        >
          <Text
            style={{ fontSize: responsiveFontSize(1.7), fontWeight: "500" , color:"red"}}
          >
            Logout
          </Text>
          <MaterialIcons name="logout" size={16} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Settings