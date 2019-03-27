import { createStackNavigator } from "react-navigation";

import HomeScreen from "../components/Lol";
import DetailItem from "../components/Lol/DetailItem";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailItem
  },
  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default HomeStack;
