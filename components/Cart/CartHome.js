import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import { observer } from "mobx-react";
import cartStore from "../../stores/CartStore";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";
import CartItem from "./CartItem";

class CartHome extends Component {
  render() {
    if (cartStore.items) {
      return (cartItems = cartStore.items.map(item => {
        return <CartItem key={item.id} item={item} />;
      }));
    }
    return (
      <Container>
        <Content>{cartItems}</Content>
      </Container>
    );
  }
}

export default observer(CartHome);
