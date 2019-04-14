import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView } from 'react-native';

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
			<Container style={styles.container}>
				<ScrollView>
					<Card
						transparent
						style={{
							flex       : 1,
							alignItems : 'center'
						}}
					>
						<CardItem style={styles.card}>
							<Left>
								{/* <Image
              source={{ uri: item.image }}
              style={{ height: 150, width: null, flex: 1 }}
            /> */}
								<Body>
									<Text style={styles.text}>{item.name}</Text>
									{/* <Text note>${item.price}</Text> */}
								</Body>
							</Left>
						</CardItem>

						<CardItem cardBody style={styles.card}>
							<Image source={{ uri: item.image }} style={{ height: 300, width: '95%' }} />
						</CardItem>
						<CardItem style={styles.card}>
							<Body>
								<Text style={styles.text}>{item.description}</Text>

								<Text note style={styles.textNote}>
									${item.price}
								</Text>
							</Body>
						</CardItem>

						<CardItem style={styles.card}>
							<Button
								transparent
								style={{ marginHorizontal: 5, fontSize: 30 }}
								onPress={() => this.setState({ quantity: this.state.quantity + 1 })}
							>
								<Text style={styles.text}>+</Text>
							</Button>
							<Label style={styles.textNote}>{this.state.quantity}</Label>
							<Button
								transparent
								style={{ marginHorizontal: 5, fontSize: 30 }}
								onPress={() => this.setState({ quantity: this.state.quantity - 1 })}
							>
								<Text style={styles.text}>-</Text>
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
								<Icon
									active
									type="MaterialIcons"
									name="add-shopping-cart"
									style={{ color: '#FEB47B' }}
								/>
							</Button>

							<Body />
						</CardItem>
					</Card>
				</ScrollView>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		backgroundColor : '#422D56'
	},
	card      : {
		borderColor     : '#25274d',
		backgroundColor : 'transparent'
	},
	text      : { color: 'white' },
	textNote  : { color: '#FEB47B' }
});

export default DetailItem;
