import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { observer } from 'mobx-react';
import cartStore from '../../stores/CartStore';
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
	Fab,
	Label
} from 'native-base';
import CartItem from './CartItem';
import authStore from '../../stores/authStore';
let total = 0;
class CartHome extends Component {
	handleCheckout = () => {
		console.log(authStore.user);
		if (authStore.user) {
			if (cartStore.items) {
				const cart = cartStore.cart;
				const status = true;
				cartStore.checkout(cart, status);
				cartStore.items = [];
				alert('thank you for shopping');
				this.props.navigation.navigate('Home');
			}
		} else {
			this.props.navigation.navigate('ProfileTab');
		}
	};

	render() {
		let cartItems;

		if (cartStore.items) {
			cartItems = cartStore.items.map((item) => {
				return <CartItem key={item.id} item={item} />;
			});
		}
		return (
			<Container style={styles.container}>
				<Content>
					<Card transparent>
						<CardItem style={styles.card}>
							<Body>
								{cartStore.total > 0 ? (
									<Text style={styles.text}>Total: ${cartStore.total}</Text>
								) : null}
							</Body>
						</CardItem>
					</Card>

					{cartItems}
				</Content>
				<Fab
					Button
					direction="right"
					position="bottomRight"
					style={{ backgroundColor: '#351C4D' }}
					onPress={this.handleCheckout}
				>
					<Icon name="check-circle" type="FontAwesome" />
					<Button style={{ backgroundColor: '#o2c39a' }} />
				</Fab>
			</Container>
		);
	}
}
const styles = StyleSheet.create({
	container     : {
		backgroundColor : '#422D56'
	},
	card          : {
		borderWidth     : 0,
		borderColor     : '#116466',
		backgroundColor : 'transparent'
	},
	textHigligted : { color: 'white' },
	text          : { color: '#FEB47B', alignSelf: 'center' }
});

export default observer(CartHome);
