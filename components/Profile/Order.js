import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Icon
} from "native-base";
import cartStore from "../../stores/CartStore";
import authStore from "../../stores/authStore";
import OrderItems from "./OrderItems";

class Order extends Component {
  render() {
    const order = this.props.order;
    const cartId = order.id;
    const m = cartStore.getHistoryCartItem(cartId);
    return (
      <>
        <List>
          <ListItem
            last
            Button
            style={{ marginTop: 5 }}
            onPress={() =>
              this.props.navigation.navigate("OrderItems", { cartId: cartId })
            }
          >
            <Text>{order.timestamp}</Text>
          </ListItem>
        </List>
        <Text />
      </>
    );
  }
}

export default Order;
