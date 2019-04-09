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
  Icon,
  Spinner
} from "native-base";
import cartStore from "../../stores/CartStore";
import authStore from "../../stores/authStore";
import Order from "./Order";
import { observer } from "mobx-react";

class UserOrderHistory extends Component {
  componentDidMount() {
    const userId = this.props.navigation.getParam("user").id;
    // console.log("USERRRRRR", userId);
    cartStore.getHistoryOrder(userId);
  }
  render() {
    // console.log("HISTORYYYYYY", cartStore.history);
    if (cartStore.loadingHistory) {
      return <Spinner />;
    }
    const userOrder = cartStore.history.map(order => {
      return (
        <Order
          key={order.id}
          order={order}
          navigation={this.props.navigation}
        />
      );
    });
    return (
      <Container
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Content>{userOrder}</Content>
      </Container>
    );
  }
}

export default observer(UserOrderHistory);
