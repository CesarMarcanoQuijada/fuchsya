import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { RegisterScreen } from "./src/screens/Register";
import { default as theme } from "./darkTheme.json";
import { StatusBar } from "react-native";
import { LoginScreen } from "./src/screens/Login";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppNavigator } from "./src/navigation/LoggedNavigation";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { VerifyScreen } from "./src/screens/VerifyEmail";

const client = new ApolloClient({
  uri: "http://192.168.250.3:4000/graphql",
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

export default () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <StatusBar backgroundColor="#161C35" barStyle="light-content" />
      <ApolloProvider client={client}>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Verify" component={VerifyScreen} />
          <Stack.Screen name="Logged" component={AppNavigator} />
        </Stack.Navigator>
      </ApolloProvider>
    </ApplicationProvider>
  </NavigationContainer>
);
