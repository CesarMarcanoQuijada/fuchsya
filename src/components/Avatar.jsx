import React from "react";
import { Avatar as AvatarUK, Button } from "@ui-kitten/components";
import { StyleSheet } from "react-native";

export default Avatar = ({ name, source }) => {
  return (
    <Button
      accessoryLeft={() => <AvatarUK source={source} size="small" />}
      appearance="ghost"
      style={styles.avatar}
    >
      {name}
    </Button>
  );
};

const styles = StyleSheet.create({
  avatar: { height: 40, borderRadius: 15 },
});
