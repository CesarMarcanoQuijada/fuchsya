import React from "react";
import { Vibration } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { BlockButton } from "../components/BlockButton";
import { AppLogotype } from "../components/AppLogotype";
import { Subtitle } from "../components/Subtitle";
import { Input } from "./../components/Input";
import { gql, useMutation } from "@apollo/client";
import { Mutations } from "../graphql/Mutations";
import * as Keychain from "react-native-keychain";

// When you want to store the session

export const RegisterScreen = () => {
  const [register, { loading }] = useMutation(Mutations.REGISTER);
  const [email, setEmail] = React.useState("cucho222@correo.com");
  const [password, setPassword] = React.useState("pasguor23456");

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
      }}
    >
      <AppLogotype />
      <Subtitle content="Login" />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        autoCompleteType="email"
        value={email}
        onChangeText={(txt) => setEmail(txt)}
        />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(txt) => setPassword(txt)}
        />
      <BlockButton
        onPress={() => {
            register({
              variables: {
                password,
                email,
              },
            })
            .then((r) => {
                const rawValue = JSON.stringify(r);
                Keychain.setGenericPassword("session", rawValue);
              })
              .catch((e) => console.error(e));
        }}
      >
        Login
      </BlockButton>
    </Layout>
  );
};
