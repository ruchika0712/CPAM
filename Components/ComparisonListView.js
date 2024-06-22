import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
  Text,
} from "react-native";
import { List, Snackbar, Button, Surface } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Linking } from "react-native";
import fetchData from "../Hooks/fetchData";

const ComparisonListView = () => {
  const [data, setData] = useState([]);
  const [dataloader, setdataloader] = useState(true);
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getForms();
  }, []);

  const getForms = () => {
    setdataloader(true);
    fetchData
      .fetchComparison()
      .then((res) => {
        setData(res.data.data["data"]);
        setdataloader(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        // console.error('Error fetching Bare Act Data:', error);
        setData([
          {
            link: "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Pdfs%2F1e8186c0-0170-4c97-bcef-9ba66e30be5c?alt=media",
            title: "Title Here",
            imp: false,
          },
        ]);
        setdataloader(false); // Set loading to false on error
      });
  };

  const handleDownload = (link) => {
    setMessage(`Downloading ${link}`);
    setVisible(true);

    Linking.openURL(link)
      .then(() => {
        setMessage(`Download successful: ${link}`);
      })
      .catch((error) => {
        console.error("Error opening URL:", error);
        setMessage(`Download failed: ${link}`);
      });
  };

  const [isRefreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getForms();
    setRefreshing(false);
  };

  return dataloader ? (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#007ac3" />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Surface
            style={[
              styles.itemContainer,
              item.imp ? styles.importantContainer : styles.normalContainer,
            ]}
          >
            <TouchableOpacity
              onPress={() => handleDownload(item.link)}
              style={{ flex: 1 }}
            >
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ flex: 1 }}
                >
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
            <Button
              icon={() => <Feather name="download" size={24} />}
              onPress={() => handleDownload(item.link)}
              style={styles.downloadButton}
            />
          </Surface>
        )}
      />

      <Snackbar
        visible={visible}
        onDismiss={() => setVisible(false)}
        duration={3000}
      >
        {message}
      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
    fontSize: 14,
    fontWeight: "900",
  },
  itemContainer: {
    shadowColor: "black",
    shadowRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 10,
    margin: 5,
    marginTop: 7,
  },
  downloadButton: {
    marginLeft: 10,
  },

  importantContainer: {
    backgroundColor: "#DFF0D8", // Light green color
  },

  normalContainer: {
    backgroundColor: "#FFFFFF", // You can set the background color for normal items
  },
});

export default ComparisonListView;
