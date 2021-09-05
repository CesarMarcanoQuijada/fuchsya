import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as theme from "../theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { DefaultNavigator } from "./router";

/**
 * Index
 * @returns Index
 */
const Index = () => {
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <DefaultNavigator />
      </ApplicationProvider>
    </NavigationContainer>
  );
};

export default Index;
