import React from "react";
import { Vibration } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { BlockButton } from "../components/BlockButton";
import { AppLogotype } from "../components/AppLogotype";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { gql, useMutation } from "@apollo/client";
import { Mutations } from "../graphql/Mutations";
import * as Keychain from "react-native-keychain";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [register, { loading }] = useMutation(Mutations.REGISTER);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigation()

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
        onPress={async () => {
          const user = await register({
            variables: {
              password,
              email,
            },
          });
          console.log(user);
          const rawValue = JSON.stringify(user);
          await Keychain.setGenericPassword("session", rawValue);
          const pass = await Keychain.getGenericPassword();
          console.log(pass);
        }}
      >
        Login
      </BlockButton>
      <BlockButton
      appearance="outline"
        size="small"
        onPress={async () => {
          navigation.replace("Register");
        }}
      >
        No estoy registrado.
      </BlockButton>
    </Layout>
  );
};
