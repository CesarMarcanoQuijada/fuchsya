import React from "react";
import { Avatar, Button, Icon, Layout, Text } from "@ui-kitten/components";
import { Image, ScrollView, View } from "react-native";
import Publication from "../components/Publication";
import Logout from "../functions/Logout";

export default NewsScreen = () => {

  return (
    <Layout style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          marginBottom: 10,
        }}
      >
        <Text status="primary" style={{ fontSize: 29, fontWeight: "700" }}>
          Noticias
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            style={{ width: 40, height: 40, borderRadius: 15 }}
            appearance="outline"
            accessoryLeft={(props) => <Icon {...props} name="search" />}
          />
          <Button
            style={{ width: 40, height: 40, borderRadius: 15, marginLeft: 10 }}
            onPress={Logout}
            accessoryLeft={(props) => <Icon {...props} name="person" />}
          />
        </View>
      </View>
      <ScrollView>
        <Publication withImage />
        <Publication />
      </ScrollView>
    </Layout>
  );
};
