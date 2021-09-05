import React from "react";
import { StyleSheet, FlatList, ImageBackground, View, Dimensions } from "react-native";
import Slide from "./Slide";


const { height, width } = Dimensions.get("window");

const Slides = ({ data }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/slidesBackground.png")}
        style={styles.background}
      />
      <FlatList
        {...{ data }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={(props) => <Slide {...props } />}
      />
    </View>
  );
};

export default Slides;

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height,
    width
  },
});
