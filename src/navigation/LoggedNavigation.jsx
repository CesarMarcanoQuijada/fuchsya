import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewsScreen from "./../screens/News";
import FriendsScreen from './../screens/Friends';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";

const { Navigator, Screen } = createBottomTabNavigator();

const routes = [
  { icon: "compass-outline", name: "Noticias", component: NewsScreen },
  { icon: "people-outline", name: "Amigos", component: FriendsScreen },
  { icon: "plus", name: "Create", component: NewsScreen },
  { icon: "hash-outline", name: "Trends", component: NewsScreen },
  { icon: "bell-outline", name: "Perfil", component: NewsScreen },
];

const BottomTabBar = ({ state }) => {
  const navigation = useNavigation();
  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      {routes.map((item, index) => (
        <BottomNavigationTab
          key={index}
          icon={(props) => <Icon {...props} name={item.icon} />}
        />
      ))}
    </BottomNavigation>
  );
};

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar state={props.state} />}
    screenOptions={{ header: () => null }}
  >
    {routes.map((item, index) => (
      <Screen key={index} name={item.name} component={item.component} />
    ))}
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer independent>
    <TabNavigator />
  </NavigationContainer>
);
