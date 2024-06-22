import { View, Text, Button } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
// import Header from '../../Components/Home/Header'
// import Slider from '../../Components/Home/Slider';
import { ScrollView } from "react-native-gesture-handler";
import MainBody from "../Components/MainBody";

export default function Home() {
  return (
    <View style={{ overflow: "scroll", backgroundColor: "white" }}>
      <Header />
      <Slider />
      <MainBody />
    </View>
  );
}
