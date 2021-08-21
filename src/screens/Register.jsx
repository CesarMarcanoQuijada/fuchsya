import React from "react";
import { Alert, Vibration } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import { BlockButton } from "../components/BlockButton";
import { AppLogotype } from "../components/AppLogotype";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { from, gql, useMutation } from "@apollo/client";
import { Mutations } from "../graphql/Mutations";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

export const RegisterScreen = () => {
  const [register] = useMutation(Mutations.REGISTER);
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const navigation = useNavigation()

  const registerFunc = async () => {
    try {
      if (username.includes(" ")) throw new Error("Invalid username");
      if (password2 !== password) throw new Error("Passwords are not equal");
      if (!/\S+@\S+\.\S+/.test(email)) throw new Error("Invalid email address");
      const user = await register({
        variables: {
          name: (
            name.split("")[0].toUpperCase() + name.split(name.split("")[0])[1]
          ).split(" ")[0],
          password,
          username,
          email,
          surname: (
            surname.split("")[0].toUpperCase() +
            surname.split(surname.split("")[0])[1]
          ).split(" ")[0],
        },
      });
      if (user.data.Register.startsWith("Error")) {
        Alert.alert("Error", user.data.Register);
        console.log(user.data.Register);
      } else {
        await SecureStore.setItemAsync(
          "user-token",
          JSON.stringify({ token: user.data.Register })
        );
      }
    } catch (error) {
      Alert.alert("Error", "" + error);
    }
  };

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
      <BlockButton onPress={registerFunc}>Register</BlockButton>
      <BlockButton
        appearance="outline"
        size="small"
        onPress={async () => {
          navigation.replace("Login");
        }}
      >
        Estoy registrado.
      </BlockButton>
    </Layout>
  );
};
