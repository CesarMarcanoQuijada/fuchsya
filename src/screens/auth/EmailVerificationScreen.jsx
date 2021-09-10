import React, { useState } from "react";
import { Button, Layout } from "@ui-kitten/components";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import { AppName, AuthInput } from "../../components";
import { validateEmail, validatePass } from "../../functions";
import { useNavigation } from "@react-navigation/core";
import { loginInputs } from "../../data";

export default function LoginScreen() {
  const navigation = useNavigation();

  const defaultState = { err: false, txt: "" };

  const [email, setEmail] = useState(defaultState);
  const [pass, setPass] = useState(defaultState);

  const chgTxt = (txt, setTxt, type) => {
    let func;
    switch (type) {
      case "email":
        func = validateEmail;
      case "pass":
        func = validatePass;
    }
    return [txt, (e) => func(e, { set: setTxt, get: txt }), type];
  };

  const inputs = loginInputs({
    chgTxt,
    email,
    setEmail,
    pass,
    setPass,
  });

  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar backgroundColor="#00000022" translucent />
      <ScrollView>
        <View
          style={{
            flex: 1,
            minHeight: Dimensions.get("window").height,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        >
          <AppName size={40} />
          {inputs.map(({ placeholder, chTxt }, i) => {
            return <AuthInput {...{ placeholder, chTxt }} key={i} />;
          })}
          <Button style={styles.authButton}>INICIAR SESION</Button>
          <Button
            style={styles.authButton}
            onPress={() => navigation.navigate("register")}
            size="small"
            appearance="outline"
          >
            No estoy registrado
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  authButton: {
    width: "100%",
    borderRadius: 16,
    marginTop: 10,
  },
});

