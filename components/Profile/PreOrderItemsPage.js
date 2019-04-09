import React, { Component } from "react";

import { Image, TouchableHighlight } from "react-native";
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
import ItemStore from "../../stores/itemStore";

class PreOrderItemsPage extends Component {
  render() {
    const item = this.props.item;

    const itemmm = ItemStore.getItem(item.item_id);
    console.log("fuckdjncfjenfnrvnf", item.quantity);
    return (
      <Card>
        <CardItem>
          <Left>
            <Image
              source={{ uri: itemmm.image }}
              style={{ height: 100, width: "40%", flex: 1 }}
            />
            <Body>
              <Text>{itemmm.name}</Text>
              <Text note>${itemmm.price}</Text>
              <Text note>quantity: {item.quantity} </Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}
export default PreOrderItemsPage;
