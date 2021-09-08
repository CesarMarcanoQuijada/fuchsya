import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { APP_NAME } from "../../data";

/**
 *
 * @param {{size: number, withLogo: boolean, white: boolean}} props
 * @returns App Name Text
 */
const AppName = ({ size, withLogo, white }) => {
  return (
    <View style={styles.container}>
      {(() => {
          if (withLogo) {
              return <Image
              source={require("../../../assets/icon.png")}
              style={{ width: size + 20, height: size + 20, borderRadius: size + 20 / 2}}
            />
          } else {
              return <View />
          }
      })()}
      <Text style={{ fontSize: size, color: white ? "white" : "#B582FF" }}>
        {APP_NAME}
      </Text>
    </View>
  );
};

export default AppName;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 20,
  },
});
