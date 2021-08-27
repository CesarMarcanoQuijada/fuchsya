import React from "react";
import {
  Avatar,
  Button,
  Icon,
  Layout,
  List,
  ListItem,
  Text,
} from "@ui-kitten/components";
import { Image, ScrollView, View } from "react-native";
import Publication from "../components/Publication";

export default CreateScreen = () => {
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
          Crear
        </Text>
      </View>
      <List
        data={[
          {
            name: "Publicación",
            icon: "globe-2",
          },
          {
            name: "Historia",
            icon: "clock",
          },
          {
            name: "Blink",
            icon: "flash-outline",
          },
          {
            name: "Pregunta",
            icon: "question-mark-outline",
          },
          {
            name: "Mención",
            icon: "at-outline",
          },
          {
            name: "Logro",
            icon: "award-outline",
          },
          {
            name: "Video",
            icon: "film-outline",
          },
          {
            name: "Idea Hub",
            icon: "bulb-outline",
          },
          {
            name: "Anuncio",
            icon: "bar-chart-2-outline",
          },
          {
            name: "Producto",
            icon: "pricetags-outline",
          },
        ]}
        renderItem={({ item: { name, icon } }) => (
          <ListItem
            title={() => <Text style={{ fontSize: 25 }}>{name}</Text>}
            accessoryLeft={(props) => <Icon {...props} name={icon} />}
          />
        )}
      />
    </Layout>
  );
};
