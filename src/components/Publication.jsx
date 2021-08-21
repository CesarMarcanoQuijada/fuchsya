import React from "react";
import { Avatar, Button, Icon, Layout, Text } from "@ui-kitten/components";
import { Image, ScrollView, View } from "react-native";
import AvatarBar from "./AvatarBar";

export default Publication = ({ withImage }) => {
  return (
    <View style={{ margin: 5 }}>
      <AvatarBar />
      {(() => {
        if (withImage) {
          return (
            <View>
              <Text category="p1" style={{marginHorizontal: 10, marginBottom: 10}}>Hello world</Text>
              <Image
                source={require("./example.jpg")}
                style={{ width: "100%", height: 300, borderRadius: 16 }}
              />
            </View>
          );
        } else {
          return (
            <View>
              <Text category="h4">Hello world</Text>
            </View>
          );
        }
      })()}
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          style={{ height: 40, borderRadius: 15 }}
          appearance="ghost"
          status="danger"
          accessoryLeft={(props) => <Icon {...props} name="heart-outline" />}
        >
          122
        </Button>
        <Button
          style={{ height: 40, borderRadius: 15 }}
          appearance="ghost"
          status="info"
          accessoryLeft={(props) => <Icon {...props} name="message-square" />}
        >
          122
        </Button>
        <Button
          style={{ height: 40, borderRadius: 15 }}
          appearance="ghost"
          status="success"
          accessoryLeft={(props) => <Icon {...props} name="share" />}
        >
          122
        </Button>
      </View>
    </View>
  );
};
