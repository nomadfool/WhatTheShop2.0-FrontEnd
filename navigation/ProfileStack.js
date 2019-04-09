import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import React from "react";
import { Icon } from "native-base";

import LoginScreen from "../components/Login";
import RegistrationScreen from "../components/Registration";
import EditProfile from "../components/Profile/editProfile";
import Address from "../Address/Address";
import EditAddress from "../Address/EditAddress";
import ViewAddress from "../Address/ViewAddress";
import UserOrderHistory from "../components/Profile/UserOrderHistory";
import OrderItems from "../components/Profile/OrderItems";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegistrationScreen,
    EditProfile: EditProfile,
    Address: Address,
    EditAddress: EditAddress,
    ViewAddress: ViewAddress,
    orderHistory: UserOrderHistory,
    OrderItems: OrderItems
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
