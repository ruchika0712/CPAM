import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";


const Header = ({ onMenuPress , title = "Chandigarh Police"}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>{title}</Text>
      {/* <Text style={styles.logo}>Welcome Guest!</Text> */}
      <TouchableOpacity onPress={onMenuPress}>
        <AntDesign
          name="menu-unfold"
          size={24}
          color="black"
          style={styles.hamburger}
        />
      </TouchableOpacity>
    </View>
  );
};

const CustomDrawer = ({ isVisible, onClose }) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={drawerStyles.modal}
      animationIn="slideInRight"
      animationOut="slideOutRight"
    >
      <View style={drawerStyles.container}>
        <TouchableOpacity style={drawerStyles.closeButton} onPress={onClose}>
          <AntDesign name="close" size={24} />
        </TouchableOpacity>
        <Image
          source={require("../assets/chd-police.png")}
          style={drawerStyles.logo}
        />
        <Text style={drawerStyles.drawerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    </Modal>
  );
};

const HomeScreen = ({title}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <View style={styles.container}>
      <Header onMenuPress={openDrawer} title={title} />
      <CustomDrawer isVisible={isDrawerOpen} onClose={closeDrawer} />
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    marginTop: '2%',
  },
  logo: {
    marginTop: "10%",
    paddingLeft: "5%",
    color: "#007ac3",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "right",
  },
  hamburger: {
    position: "absolute",
    top: 6,
    right: 15,
  },
});

const drawerStyles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    // width: "80%",
    // height: "100vh",
    flex: 1,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    // right: 0,
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  logo: {
    width: 185,
    height: 250,
    marginBottom: 20,
  },
  drawerText: {
    color: "#007ac3",
    fontSize: 18,
    textAlign: "justify",
  },
});

export default HomeScreen;
