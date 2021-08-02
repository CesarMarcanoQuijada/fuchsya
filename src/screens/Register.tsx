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
  const [register, { data }] = useMutation(Mutations.REGISTER);
  const [name, setName] = React.useState("chucho");
  const [surname, setSurname] = React.useState("200");
  const [username, setUsername] = React.useState("chuuchooo222");
  const [email, setEmail] = React.useState("cucho222@correo.com");
  const [password, setPassword] = React.useState("pasguor23456");
  const [password2, setPassword2] = React.useState("pasguor23456");

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
      <Subtitle content="Register" />
      <Input
        placeholder="Name"
        value={name}
        onChangeText={(txt) => setName(txt)}
        />
      <Input
        placeholder="Surname"
        value={surname}
        onChangeText={(txt) => setSurname(txt)}
        />
      <Input
        placeholder="Username"
        value={username}
        onChangeText={(txt) => setUsername(txt)}
        />
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
      <Input
        placeholder="Confirm password"
        secureTextEntry
        value={password2}
        onChangeText={(txt) => setPassword2(txt)}
      />
      <BlockButton
        onPress={() => {
          if (password2 === password) {
            register({
              variables: {
                name,
                password,
                username,
                email,
                surname,
              },
            })
            .then((r) => {
                const rawValue = JSON.stringify(r);
                Keychain.setGenericPassword("session", rawValue);
              })
              .catch((e) => console.error(e));
          } else alert("Passwords are not equal");
        }}
      >
        Register
      </BlockButton>
      <Text>{JSON.stringify(data)}</Text>
    </Layout>
  );
};
