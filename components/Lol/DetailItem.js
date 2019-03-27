import React, { Component } from "react";
import { Image } from "react-native";

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

import cartStore from "../../stores/CartStore";

class DetailItem extends Component {
  handleAddingToCart = () => {
    const item = this.props.navigation.getParam("item");

    cartStore.addItemsToCart(item);
  };
  render() {
    item = this.props.navigation.getParam("item");
    return (
      <Card>
        <CardItem>
          <Left>
            {/* <Image
              source={{ uri: item.image }}
              style={{ height: 150, width: null, flex: 1 }}
            /> */}
            <Body>
              <Text>{item.name}</Text>
              {/* <Text note>${item.price}</Text> */}
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            source={{ uri: item.image }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Body>
            <Text>{item.description}</Text>

            <Text note>${item.price}</Text>
          </Body>
        </CardItem>

        <CardItem>
          <Left>
            <Button transparent onPress={this.handleAddingToCart}>
              <Icon active type="MaterialIcons" name="add-shopping-cart" />
            </Button>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Left>
          <Body />
        </CardItem>
      </Card>
    );
  }
}

export default DetailItem;
