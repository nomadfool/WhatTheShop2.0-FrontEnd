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
  Right,
  Fab
} from "native-base";
import CartItem from "./CartItem";
import authStore from "../../stores/authStore";

class CartHome extends Component {
  handleAddingToCart = () => {
    console.log(authStore.user);
    if (authStore.user) {
      if (cartStore.items) {
        alert("thank you for shopping");
      }
    } else {
      this.props.navigation.navigate("ProfileTab");
    }
  };

  render() {
    let cartItems;
    if (cartStore.items) {
      cartItems = cartStore.items.map(item => {
        return <CartItem key={item.id} item={item} />;
      });
    }
    return (
      <Container>
        <Content>{cartItems}</Content>
        <Fab
          Button
          direction="right"
          position="bottomRight"
          style={{ backgroundColor: "#02c39a" }}
          onPress={this.handleAddingToCart}
        >
          <Icon name="check-circle" type="FontAwesome" />
          <Button style={{ backgroundColor: "#o2c39a" }}>
            <Icon name="logo-whatsapp" />
          </Button>
          <Button style={{ backgroundColor: "#3B5998" }}>
            <Icon name="logo-facebook" />
          </Button>
          <Button disabled style={{ backgroundColor: "#DD5144" }}>
            <Icon name="mail" />
          </Button>
        </Fab>
      </Container>
    );
  }
}

export default observer(CartHome);
