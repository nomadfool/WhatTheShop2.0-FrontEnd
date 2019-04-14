import React, { Component } from 'react';

import { Image, TouchableHighlight, StyleSheet } from 'react-native';
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
import ItemStore from '../../stores/itemStore';

class PreOrderItemsPage extends Component {
	render() {
		const item = this.props.item;

		const itemmm = ItemStore.getItem(item.item_id);
		console.log('fuckdjncfjenfnrvnf', item.quantity);
		return (
			<Card transparent>
				<CardItem style={styles.card}>
					<Left>
						<Image source={{ uri: itemmm.image }} style={{ height: 100, width: '40%', flex: 1 }} />
						<Body>
							<Text style={styles.text}>{itemmm.name}</Text>
							<Text note style={styles.textNote}>
								${itemmm.price}
							</Text>
							<Text note style={styles.textNote}>
								quantity: {item.quantity}{' '}
							</Text>
						</Body>
					</Left>
				</CardItem>
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
export default PreOrderItemsPage;
