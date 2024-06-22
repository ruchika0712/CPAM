// import React from "react";
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   StyleSheet,
//   Linking,
// } from "react-native";

// const SliderCard = ({ image,link}) => {
//   const handleCardPress = () => {
//     // Open the PDF URL in the default web browser
//     Linking.openURL(link);
//   };

//   return (
//     <TouchableOpacity onPress={handleCardPress}>
//       <View style={styles.cardContainer}>
//         <Image source={{ uri: image }} style={styles.image} />
//         <View style={styles.contentContainer}>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   cardContainer: {
    
//     height: 210,
//     width: 350,
//     overflow: "hidden",
//     justifyContent: "space-between",
//   },
//   image: {
//     height: 210,
//     width: 350,
//     resizeMode: "cover",
//     borderRadius: 8,
//   },
//   contentContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 8,
//   },
//   title: {
//     flex: 1,
//     fontSize: 18,
//     fontWeight: "bold",
//     marginTop: 10,
//     color: "black",
//   },
//   knowMoreText: {
//     fontSize: 14,
//     marginTop: 10,
//     color: "#007ac3",
//     fontWeight: "bold",
//   },
// });

// export default SliderCard;
