import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from "react-native";

const Card = ({ image, title, pdfUrl }) => {
  const handleCardPress = () => {
    // Open the PDF URL in the default web browser
    Linking.openURL(pdfUrl);
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.contentContainer}>
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {title}
          </Text>

          <TouchableOpacity onPress={handleCardPress}>
            <Text style={styles.knowMoreText}>Know more ...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    height: 230,
    width: 320,
    overflow: "hidden",
    justifyContent: "space-between",
  },
  image: {
    height: 175,
    resizeMode: "cover",
    borderRadius: 8,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "black",
  },
  knowMoreText: {
    fontSize: 14,
    marginTop: 10,
    color: "#007ac3",
    fontWeight: "bold",
  },
});

export default Card;
