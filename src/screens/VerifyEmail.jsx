import React from "react";
import { Alert, View, TextInput } from "react-native";
import { Layout, Spinner } from "@ui-kitten/components";
import { BlockButton } from "../components/BlockButton";
import { AppLogotype } from "../components/AppLogotype";
import { Subtitle } from "../components/Subtitle";
import { useMutation } from "@apollo/client";
import { Mutations } from "../graphql/Mutations";
import * as SecureStore from "expo-secure-store";
import { useNavigation } from "@react-navigation/native";

export const VerifyScreen = () => {
  const [verify] = useMutation(Mutations.VERIFY_EMAIL);
  const [code, setCode] = React.useState("");
  const [spinner, setSpinner] = React.useState(false);
  const navigation = useNavigation();

  React.useEffect(() => {
    (async () => {
      setSpinner(true);
      let data = await SecureStore.getItemAsync("user-token");
      data = JSON.parse(data);
      if (!data) {
        setSpinner(false);
      } else {
        navigation.replace("Logged");
      }
    })();
    return () => {
      setSpinner(false);
    };
  }, []);

  const verifyFunc = async () => {
    setSpinner(true);
    try {
      let data = await SecureStore.getItemAsync("user-register-verify-stage");
      data = JSON.parse(data);
      data.token1 = data.token;
      delete data.token;
      data.token2 = code;
      console.log(data)

      const user = await verify({
        variables: data,
      });
      if (user.data.Register.startsWith("Error")) {
        setSpinner(false);
        Alert.alert("Error", user.data.Register);
        console.log(user.data.Register);
      } else {
        setSpinner(false);
        await SecureStore.setItemAsync(
          "user-token",
          JSON.stringify({ token: user.data.Register })
        );
        await SecureStore.deleteItemAsync("user-register-verify-stage");
        navigation.replace("Logged");
      }
    } catch (error) {
      Alert.alert("Error", "" + error);
      setSpinner(false);
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
      <Subtitle content="Confirmar correo" />
        <TextInput
          placeholder="Codigo de verificacion"
          value={code}
          onChangeText={(txt) => setCode(txt)}
          style={{
            textAlign: "center",
            width: "100%",
            color: "black",
            fontSize: 20,
            backgroundColor: "white",
            padding: 15,
            borderRadius: 16,
            margin: 20,
            width: "100%",
          }}
          maxLength={8}
        />
      <BlockButton onPress={verifyFunc}>Verificar Correo</BlockButton>
      <BlockButton
        appearance="outline"
        size="small"
        onPress={async () => {
          navigation.replace("Register");
        }}
      >
        Volver al registro.
      </BlockButton>
      {(() => {
        if (spinner) {
          return (
            <View
              style={{
                position: "absolute",
                bottom: 0,
                top: 0,
                left: 0,
                right: 0,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#313131",
              }}
            >
              <Spinner status="control" size="giant" />
            </View>
          );
        } else return <View />;
      })()}
    </Layout>
  );
};
