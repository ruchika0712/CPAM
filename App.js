import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Navigations/TabNavigation";
import { SafeAreaView } from "react-native";

import { useWarmUpBrowser } from './Hooks/warmUpBrowser';



export default function App() {

  useWarmUpBrowser();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer style={styles.navbar}>
        <TabNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  navbar: {
    backgroundColor: "white",
  },
});
