import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";

import SCard from "../Components/SCard";
import { useRoute } from "@react-navigation/native";
import fetchData from "../Hooks/fetchData";
import Header from "../Components/Header";

export default function BareAct() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBareActs();
  }, []);

  const getBareActs = () => {
    setLoading(true); // Set loading state to true
    fetchData
      .fetchBareActContest()
      .then((res) => {
        setData(res.data.data["data"]);
        // console.log(res.data.data["data"])
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); // Set loading state to false after the request is complete
      });
  };

  const [isRefreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    getBareActs();
    setRefreshing(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title={"Bare Act's"} />

      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 25,
          }}
        >
          <ActivityIndicator size="large" color="#007ac3" />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 25,
          }}
        >
          <FlatList
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
            data={data}
            renderItem={({ item }) =>
              SCard({
                image_url: item.image_url,
                title: item.title,
                href: item.link,
              })
            }
          />
        </View>
      )}
    </View>
  );
}
