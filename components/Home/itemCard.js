import React, { Component } from 'react';
import { Image, TouchableHighlight } from 'react-native';
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
			<Card>
				<TouchableHighlight
					onPress={() =>
						this.props.navigation.navigate('Detail', {
							item : item
						})}
				>
					<CardItem>
						<Left>
							<Image source={{ uri: item.image }} style={{ height: 100, width: '40%', flex: 1 }} />
							<Body>
								<Text>{item.name}</Text>
								<Text note>${item.price}</Text>
							</Body>
						</Left>
					</CardItem>
				</TouchableHighlight>
			</Card>
		);
	}
}

export default ItemCard;
