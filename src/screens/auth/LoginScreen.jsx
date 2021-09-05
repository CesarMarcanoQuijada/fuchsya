import React from "react";
import { Layout } from "@ui-kitten/components";
import { ImageBackground, StatusBar, StyleSheet } from "react-native";

export default function LoginScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar hidden />
      <ImageBackground
        source={require("../../../assets/authBackground.png")}
        style={styles.background}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
