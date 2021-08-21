import React from "react";
import { Button, Icon } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import Avatar from "./Avatar";

export default AvatarBar = () => {
  return (
    <View style={styles.avatarBar}>
      <Avatar name="Cesar Marcano" source={require("./avatar.jpg")} />
      <Button
        style={styles.moreVert}
        appearance="ghost"
        accessoryLeft={(props) => <Icon {...props} name="more-vertical" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarBar: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  moreVert: {
    width: 40,
    height: 40,
    borderRadius: 15,
  },
});
