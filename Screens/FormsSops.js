import { View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import CustomListView from "../Components/CustomListView";
const FormsSops = () => {
  return (
    <View style={{ overflow: "scroll", flex: 1, backgroundColor: "white" }}>
      <Header />
      <CustomListView />
    </View>
  );
};

export default FormsSops;
