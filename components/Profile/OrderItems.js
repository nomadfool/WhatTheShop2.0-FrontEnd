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
import PreOrderItemsPage from "./PreOrderItemsPage";
import { observer } from "mobx-react";

class OrderItems extends Component {
  componentWillMount() {
    const cartId = this.props.navigation.getParam("cartId");
    cartStore.getHistoryCartItem(cartId);
  }
  render() {
    const tet = cartStore.cartItems.map(item => {
      //   console.log("1234567890", item.id);
      return <PreOrderItemsPage key={item.id} item={item} />;
    });

    return (
      <Container>
        <Content>{tet}</Content>
      </Container>
    );
  }
}

export default observer(OrderItems);
