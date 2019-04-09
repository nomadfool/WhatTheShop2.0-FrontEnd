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

class ItemCard extends Component {
	render() {
		const item = this.props.item;
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
							<Image source={{ uri: item.image }} style={{ height: 100, width: '40%', flex: 1 }} />
							<Body>
								<Text style={styles.text}>{item.name}</Text>
								<Text note style={styles.textNote}>
									${item.price}
								</Text>
							</Body>
						</Left>
					</CardItem>
				</TouchableHighlight>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card     : {
		borderColor     : '#25274d',
		backgroundColor : 'transparent'
	},
	text     : { color: 'white' },
	textNote : { color: '#FEB47B' }
});

export default ItemCard;
