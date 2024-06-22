import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  StyleSheet,
  Linking,
} from "react-native";

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const scrollViewRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      if (images && images.length > 0) {
        const nextSlide = (currentSlide + 1) % images.length;
        const scrollToIndex = nextSlide === 0 ? 0 : nextSlide;
        scrollViewRef.current.scrollTo({ x: scrollToIndex * 350, animated: true });
        setCurrentSlide(scrollToIndex);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentSlide, images]);

  const handleDotPress = (index) => {
    scrollViewRef.current.scrollTo({ x: index * 350, animated: true });
    setCurrentSlide(index);
  };

  const handleSlidePress = () => {
    setModalVisible(true);
  };

  const handleMomentumScrollEnd = (event) => {
    const slide = Math.round(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    setCurrentSlide(slide);
  };

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        style={styles.carousel}
      >
        {images && images.length > 0 && images.map((item, index) => (
          <TouchableOpacity key={index} onPress={handleSlidePress}>
            <Image source={{ uri: item.image_url }} style={styles.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      {images && images.length > 0 && (
        <>
          <Text style={styles.title}>{images[currentSlide].title}</Text>
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDotPress(index)}
                style={[
                  styles.dot,
                  { backgroundColor: index === currentSlide ? "blue" : "gray" },
                ]}
              />
            ))}
          </View>
          <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <Image
                source={{ uri: images[currentSlide].image_url }}
                style={styles.modalImage}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
//   carousel: {
//     marginTop: '10%',
//     height: 210,
//   },
  image: {
    width: 350,
    height: 210,
    marginLeft: 5,
    marginTop: 5,
    resizeMode: "cover",
    borderRadius: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  dotContainer: {
    marginTop: '-3%',
    marginBottom: '3%',
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  modalImage: {
    width: 300,
    height: 400,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Slider;