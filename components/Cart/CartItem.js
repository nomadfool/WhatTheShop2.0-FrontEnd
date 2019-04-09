import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
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

import { withNavigation } from "react-navigation";

import { observer } from "mobx-react";
import cartStore from "../../stores/CartStore";

class CartItem extends Component {
  render() {
    const item = this.props.item;
    let total;

    return (
      <Card>
        <TouchableHighlight
          onPress={() =>
            this.props.navigation.navigate("Detail", {
              item: item
            })
          }
        >
          <CardItem>
            <Left>
              <Image
                source={{ uri: item.image }}
                style={{ height: 150, width: null, flex: 1 }}
              />
              <Body>
                <Text>{item.name}</Text>
                <Text note>${Number(item.price) * Number(item.quantity)}</Text>
                <Text note>Quantity: {item.quantity}</Text>
                {/* <Text note>cart: {cart}</Text> */}
              </Body>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default withNavigation(observer(CartItem));
