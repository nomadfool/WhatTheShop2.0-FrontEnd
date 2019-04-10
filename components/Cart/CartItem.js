import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';
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
} from 'native-base';

import { withNavigation } from 'react-navigation';

import { observer } from 'mobx-react';
import cartStore from '../../stores/CartStore';

class CartItem extends Component {
	render() {
		const item = this.props.item;
		let total;

		return (
			<Card transparent>
				<TouchableHighlight
					onPress={() =>
						this.props.navigation.navigate('Detail', {
							item : item
						})}
				>
					<CardItem style={styles.card}>
						<Left>
							<Image source={{ uri: item.image }} style={{ height: 150, width: null, flex: 1 }} />
							<Body>
								<Text style={styles.text}>{item.name}</Text>
								<Text note style={styles.textNote}>
									${Number(item.price) * Number(item.quantity)}
								</Text>
								<Text note style={styles.textNote}>
									Quantity: {item.quantity}
								</Text>
								{/* <Text note>cart: {cart}</Text> */}
							</Body>
						</Left>
					</CardItem>
				</TouchableHighlight>
			</Card>
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
export default withNavigation(observer(CartItem));
