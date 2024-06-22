import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

const SCard = ({ title, image_url, href }) => {
  const handleKnowMoreClick = () => {
    if (href) {
      Linking.openURL(href);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleKnowMoreClick}
      style={{
        padding: 16,
        height: 250,
        width: 340,
        overflow: "hidden",
        borderRadius: 20,
        marginRight: 30,
        backgroundColor: "#fff", // Add a background color
        elevation: 5, // Add elevation for box shadow on Android
        shadowColor: "#000", // Add shadow color for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 20, // Add margin to separate cards
      }}
    >
      <Image
        source={{ uri: image_url }}
        style={{
          flex: 1,
          borderRadius: 20,
          marginBottom: 10,
        }}
      />
      <View style={{ alignItems: "center" }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: 16,
            color: "green",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SCard;
