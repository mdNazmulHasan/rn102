import React from "react";
import { View, Text } from "react-native";
import color from "../constants/color";

const Header = ({ title }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 90,
        paddingTop: 36,
        backgroundColor: color.primary,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ color: "black", fontSize: 18 }}>{title}</Text>
    </View>
  );
};

export default Header;
