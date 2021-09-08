import React from "react";
import { Input } from "@ui-kitten/components";
import { StatusBar, StyleSheet } from "react-native";

export default function AuthInput({ placeholder, chTxt }) {
  return (
    <Input
      status={chTxt[0].err ? "danger" : undefined}
      style={styles.input}
      {...{ placeholder }}
      value={chTxt[0].txt}
      onChangeText={chTxt[1]}
      {...{
        ...(() => {
          switch (chTxt[2]) {
            case "email":
              return {
                keyboardType: "email-address",
                textContentType: "emailAddress",
              };
            case "name":
              return {
                textContentType: "name",
              };
            case "username":
              return {
                textContentType: "username",
                autoCompleteType: "off",
              };
            case "pass":
              return {
                secureTextEntry: true,
              };
          }
        })(),
      }}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 13,
    borderWidth: 1,
    borderBottomWidth: 5,
    marginVertical: 10,
  },
});
