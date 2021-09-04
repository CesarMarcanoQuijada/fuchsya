import React from "react";
import { Button } from "react-native";
import { View, Text } from "react-native";
import { AuthContext } from "./context";

/**
 * Index
 * @returns Index
 */
const Index = () => {
  const { user, login } = React.useContext(AuthContext);

  return (
    <View>
      <Text>asdas</Text>
      <Button
        title="JAJSJ"
        onPress={() => {
          alert(JSON.stringify(user));
        }}
      />
      <Text>asdas</Text>
      <Button
        title="JAJSJ"
        onPress={() => {
          login("Hola idiota");
        }}
      />
    </View>
  );
};

export default Index;
