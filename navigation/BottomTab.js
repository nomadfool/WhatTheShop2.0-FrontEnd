import React from "react";
import { Icon } from "native-base";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeStack from "./LolStack";
import ProfileStack from "./ProfileStack";
import CartStack from "./CartStack";

const BottomTab = createBottomTabNavigator(
  {
    ProfileTab: ProfileStack,
    HomeTab: HomeStack,
    CartTab: CartStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "HomeTab") {
          iconName = "home";
          iconType = "FontAwesome";
        } else if (routeName === "ProfileTab") {
          iconName = "person";
          iconType = "MaterialIcons";
        } else if (routeName === "CartTab") {
          iconName = "shopping-cart";
          iconType = "FontAwesome";
        }
        return (
          <Icon name={iconName} style={{ color: tintColor }} type={iconType} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#6200EE",
      inactiveTintColor: "#858585",
      style: {
        backgroundColor: "white"
      },
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
