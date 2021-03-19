import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Options, CurrencyList } from "../screens";

const { Screen, Navigator } = createStackNavigator();

const MainStackScreen = () => (
  <Navigator>
    <Screen name="Home" component={Home} options={{ headerShown:false }} />
    <Screen name="Options" component={Options} />
    <Screen name="CurrencyList" component={CurrencyList} options={({ route }) => ({ title: route.params && route.params.title })} />
  </Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
