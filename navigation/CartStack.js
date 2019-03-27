import { createStackNavigator } from "react-navigation";
import CartHome from "../components/Cart/CartHome";

const CartStack = createStackNavigator(
  {
    Cart: CartHome
  },

  {
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default CartStack;
