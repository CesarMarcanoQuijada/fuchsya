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
import {
  validateEmail,
  validateName,
  validateUsername,
  validatePass,
} from "../../functions";
import { registerInputs } from "../../data";
import { useNavigation } from "@react-navigation/core";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const defaultState = { err: false, txt: "" };

  const [name, setName] = useState(defaultState);
  const [surname, setSurname] = useState(defaultState);
  const [username, setUsername] = useState(defaultState);
  const [email, setEmail] = useState(defaultState);
  const [pass, setPass] = useState(defaultState);
  const [confirmPass, setConfirmPass] = useState(defaultState);

  const chgTxt = (txt, setTxt, type) => {
    let func;
    switch (type) {
      case "email":
        func = validateEmail;
      case "name":
        func = validateName;
      case "username":
        func = validateUsername;
      case "pass":
        func = validatePass;
    }
    return [txt, (e) => func(e, { set: setTxt, get: txt }), type];
  };

  const inputs = registerInputs({
    name,
    setName,
    chgTxt,
    username,
    setUsername,
    surname,
    setSurname,
    email,
    setEmail,
    pass,
    setPass,
    confirmPass,
    setConfirmPass,
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
          <Button style={styles.authButton}>REGISTRARSE</Button>
          <Button style={styles.authButton} onPress={() => navigation.navigate('login')}size="small" appearance="outline">
            Estoy registrado
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
