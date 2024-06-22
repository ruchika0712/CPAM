import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigation from "./HomeNavigation";
import Comparison from "./Comparison";
import FormsNavigation from "./FormsNavigation";

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007ac3",
        tabBarStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Comparison"
        component={Comparison}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-compare"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Forms & SOPs"
        component={FormsNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="file-document-multiple"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
