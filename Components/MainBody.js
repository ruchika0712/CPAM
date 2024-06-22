
import React, { useEffect, useState, useRef } from "react";
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
import { SwiperFlatList } from "react-native-swiper-flatlist";
import fetchData from "../Hooks/fetchData";
import Card from "./Card";
import { useNavigation } from "@react-navigation/native";
import WCard from "./WCard";
import Slider from "./Slider";


export default function MainBody() {
  const [bareActData, setBareActData] = useState([]);
  const [trainResources, setTrainResources] = useState([]);
  const [images, setImages] = useState([]);

  const [loadingBare, setBareActLoading] = useState(true);
  const [loadingTrain, setTrainLoading] = useState(true);
  const [loadingSlider, setSliderLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    getBareActs();
    getTraining();
    getInfo();
  }, []);

  const getBareActs = () => {
    setBareActLoading(true);
    fetchData
      .fetchBareActContest()
      .then((res) => {
        setBareActData(res.data.data["data"]);
        setBareActLoading(false);
      })
      .catch((error) => {
        setBareActData([
          {
            image_url:
            "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Images%2F92ef99c2-3297-416a-ac2b-8cd838c0dd47?alt=media",
            link: "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Pdfs%2F1e8186c0-0170-4c97-bcef-9ba66e30be5c?alt=media",
            title: "Title Here",
          },
        ]);
        setBareActLoading(false);
      });
  };

  const getTraining = () => {
    setTrainLoading(true);
    fetchData
      .fetchTraining()
      .then((res) => {
        setTrainResources(res.data.data["data"]);
        setTrainLoading(false);
      })
      .catch((error) => {
        setTrainResources([
          {
            image_url:
              "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Images%2Fb458842e-ff2d-4872-a839-254b58afd62d?alt=media",
            link: "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Pdfs%2F82bb64e9-7926-452e-80d2-ce59404db477?alt=media",
            title: "Title Here",
          },
        ]);
        setTrainLoading(false);
      });
  };

  const getInfo = () => {
    setSliderLoading(true);
    fetchData
      .fetchInfo()
      .then((res) => {
        setImages(res.data.data["data"]);
        setSliderLoading(false);
      })
      .catch((error) => {
        setImages([
          {
            image_url:
              "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Images%2Fb458842e-ff2d-4872-a839-254b58afd62d?alt=media",
            link: "https://firebasestorage.googleapis.com/v0/b/cpam-a6caf.appspot.com/o/Pdfs%2F82bb64e9-7926-452e-80d2-ce59404db477?alt=media",
            title: "Title Here",
          },
        ]);
        setSliderLoading(false);
      });
  };

  const onRefresh = () => {
    getBareActs();
    getTraining();
    getInfo();
  };

  return (
    <ScrollView
      style={{ paddingLeft: 10, marginBottom: 10, backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loadingBare || loadingTrain || loadingSlider} onRefresh={onRefresh} />
      }
    >
      {/* <View style={{ marginTop: 0, backgroundColor: "white" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 5, }}>
          {" "}
          Have a Good Day Officer!
        </Text>
      </View> */}

      <View style={{ marginTop: 10 }}>
        {loadingSlider ? (
          <WCard />
        ) : (
          <Slider images={images} />
        )}
      </View>
      


      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text style={styles.listhead}>Bare Act's</Text>
        <TouchableOpacity onPress={() => navigation.navigate("BareAct")}>
          <Text
            style={{
              fontSize: 14,
              color: "#007ac3",
              marginRight: 20,
              fontWeight: "bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        {loadingBare ? ( // Show loader when loading is true
          <WCard />
        ) : (
          <FlatList
            data={bareActData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Clicked Bare Act");
                }}
                style={styles.card}
              >
                {Card({
                  image: item.image_url,
                  title: item.title,
                  pdfUrl: item.link,
                })}
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <Text style={styles.listhead}>Training & Learning</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Training")}>
          <Text
            style={{
              fontSize: 14,
              color: "#007ac3",
              marginRight: 20,
              fontWeight: "bold",
            }}
          >
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 10 }}>
        {loadingTrain ? ( // Show loader when loading is true
          <WCard />
        ) : (
          <FlatList
            data={trainResources}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  console.log("Clicked training item");
                }}
                style={styles.card}
              >
                {Card({
                  image: item.image_url,
                  title: item.title,
                  pdfUrl: item.link,
                })}
              </TouchableOpacity>
            )}
            horizontal={true}
          />
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  listhead: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 5,
  },
  card: {
    marginLeft: 5,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 20,
    marginBottom: 10,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "white",

    // Elevation for Android (3rd elevation)
    elevation: 3,

    // Shadow for iOS
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

});
