import React, { Component } from 'react';
import { Image } from 'react-native';

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
	Label
} from 'native-base';

import cartStore from '../../stores/CartStore';
import Store from '../../stores/authStore';

class DetailItem extends Component {
	state = {
		quantity : 1
	};
	handleAddingToCart = () => {
		const quantity = this.state.quantity;
		if (Store.user) {
			const item = this.props.navigation.getParam('item');
			cartStore.addItemsToCart(item, quantity);
		} else {
			alert('you have to login first to add things to cart');
			this.props.navigation.navigate('ProfileTab');
		}
	};

	render() {
		item = this.props.navigation.getParam('item');
		return (
			<Card
				style={{
					flex       : 1,
					alignItems : 'center'
				}}
			>
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
					<Image source={{ uri: item.image }} style={{ height: 300, width: '95%' }} />
				</CardItem>
				<CardItem>
					<Body>
						<Text>{item.description}</Text>

						<Text note>${item.price}</Text>
					</Body>
				</CardItem>

				<CardItem>
					<Button
						transparent
						style={{ marginHorizontal: 5, fontSize: 30 }}
						onPress={() => this.setState({ quantity: this.state.quantity + 1 })}
					>
						<Text>+</Text>
					</Button>
					<Label>{this.state.quantity}</Label>
					<Button
						transparent
						style={{ marginHorizontal: 5, fontSize: 30 }}
						onPress={() => this.setState({ quantity: this.state.quantity - 1 })}
					>
						<Text>-</Text>
					</Button>
					{/* <Form>
            <Button transparent onPress={this.handleAddingToCart}>
              <Icon active type="MaterialIcons" name="add-shopping-cart" />
            </Button>
            <Item>
              <Input placeholder="20" />
            </Item>
            <Button transparent onPress={this.handleAddingToCart}>
              <Icon active type="MaterialIcons" name="add-shopping-cart" />
            </Button>
          </Form> */}
					<Button transparent onPress={this.handleAddingToCart}>
						<Icon active type="MaterialIcons" name="add-shopping-cart" />
					</Button>
					<Button transparent>
						<Icon active name="chatbubbles" />
						<Text>4 Comments</Text>
					</Button>

					<Body />
				</CardItem>
			</Card>
		);
	}
}

export default DetailItem;
