import React from "react";
import { Alert, View } from "react-native";
import { Layout, Spinner, Text } from "@ui-kitten/components";
import { BlockButton } from "../components/BlockButton";
import { AppLogotype } from "../components/AppLogotype";
import { Subtitle } from "../components/Subtitle";
import { Input } from "../components/Input";
import { useMutation } from "@apollo/client";
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
  const [spinner, setSpinner] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    (async () => {
      setSpinner(true)
      let data = await SecureStore.getItemAsync('user-token')
      data = JSON.parse(data);
      if (!data) {
        setSpinner(false)
      } else {
        navigation.replace('Logged')
      }
    })()
    return () => {
      setSpinner(false)
    }
  }, [])

  const registerFunc = async () => {
    setSpinner(true)
    try {
      if (password2 !== password) throw new Error("Passwords are not equal");
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
      if (user.data.Verify.error) {
        setSpinner(false)
        Alert.alert("Error", user.data.Verify);
      } else {
        setSpinner(false)
        await SecureStore.setItemAsync(
          "user-register-verify-stage",
          JSON.stringify(user.data.Verify)
          );
          navigation.replace('Verify')
      }
    } catch (error) {
      Alert.alert("Error", "" + error);
      setSpinner(false)
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
      {(() => {
        if (spinner) {
          return <View
          style={{
            position: "absolute",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: '#313131'
          }}
        >
          <Spinner status="control" size="giant" />
        </View>
        } else return <View />
      })()}
    </Layout>
  );
};
