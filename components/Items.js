import React from "react";
import { View, Text } from "react-native";
import { Title } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Items() {
  const length = useSelector((state) => state.cart);
  return (
    <View style={{ marginRight: 5 }}>
      <Title style={{ color: "#fff" }}>{length.length}</Title>
    </View>
  );
}
