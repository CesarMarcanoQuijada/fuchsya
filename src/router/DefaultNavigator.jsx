import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SlidesScreen, LoginScreen } from "./../screens";

const Navigation = createStackNavigator();

const DefaultNavigator = () => {
  return (
    <Navigation.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Navigation.Screen name="slides" component={SlidesScreen} />
      <Navigation.Screen name="login" component={LoginScreen} />
    </Navigation.Navigator>
  );
};

export default DefaultNavigator;
