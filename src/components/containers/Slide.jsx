import { useNavigation } from "@react-navigation/core";
import { Icon, Text, Button } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { slides } from "../../data";

const { height, width } = Dimensions.get("window");

const Slide = ({ item: { name, icon }, index }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.slide}>
      <View style={styles.middle}>
        <Icon name={icon} fill="#fff" style={{ width: 70, height: 70 }} />
        <Text category="h1" style={{ textAlign: "center" }}>
          {name}
        </Text>
      </View>
      <View style={styles.bottom}>
        {(() => {
          if (index === 0) {
            return (
              <Text
                category="h6"
                style={{ textAlign: "center", marginTop: 40, color: "white" }}
              >
                Desliza para continuar
              </Text>
            );
          } else if (index === slides.length - 1) {
            return (
              <View>
                <Button
                  style={styles.loginButton}
                  appearance="filled"
                  onPress={() => navigation.replace("login")}
                >
                  INICIAR SESION
                </Button>
                <Button
                  style={styles.loginButton}
                  appearance="filled"
                  onPress={() => navigation.replace("register")}
                >
                  REGISTRARSE
                </Button>
              </View>
            );
          } else return <View />;
        })()}
      </View>
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    height,
    width,
    padding: 10,
  },
  middle: {
    height: height / 2,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  bottom: {
    height: height / 2,
    justifyContent: "center",
    flexDirection: "column",
  },
  loginButton: {
    borderRadius: 16,
    marginTop: 20,
    borderColor: "white",
    borderWidth: 2,
  },
});
