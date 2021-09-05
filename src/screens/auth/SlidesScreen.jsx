import React from "react";
import { Layout } from "@ui-kitten/components";
import { StatusBar } from "react-native";
import { Slides } from "../../components";
import { slides } from "../../data";

export default function SlidesScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <StatusBar hidden />
      <Slides
        data={slides}
      />
    </Layout>
  );
}
