import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import cartStore from '../../stores/CartStore';
import authStore from '../../stores/authStore';
import OrderItems from './OrderItems';

class Order extends Component {
	render() {
		const order = this.props.order;
		const cartId = order.id;
		const m = cartStore.getHistoryCartItem(cartId);
		return (
			<Container style={styles.container}>
				<List>
					<ListItem
						last
						Button
						style={{ marginTop: 5 }}
						onPress={() => this.props.navigation.navigate('OrderItems', { cartId: cartId })}
					>
						<Text style={styles.text}>{order.timestamp}</Text>
					</ListItem>
				</List>
				<Text />
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container : {
		flexGrow        : 1,
		width           : '100%',
		backgroundColor : '#422D56'
	},
	text      : { color: 'white' }
});
export default Order;
