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
	Right
} from 'native-base';
import ItemCard from './itemCard';
import itemStore from '../../stores/itemStore';
import { observer } from 'mobx-react';

class ItemList extends Component {
	render() {
		const itemCard = itemStore.items.map((item) => {
			return <ItemCard key={item.id} item={item} navigation={this.props.navigation} />;
		});

		if (itemStore.loading) {
			return (
				<Container>
					<Content>
						<Text>loading</Text>
					</Content>
				</Container>
			);
		}

		return (
			<Container>
				<Content>{itemCard}</Content>
			</Container>
		);
	}
}

export default observer(ItemList);
