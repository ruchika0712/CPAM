import { View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import ComparisonListView from "../Components/ComparisonListView";

export default function ComparisonScreen() {
  return (
    <View style={{ overflow: "scroll", flex: 1, backgroundColor: "white" }}>
      <Header />
      <ComparisonListView />
    </View>
  );
}
