import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
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
	Footer,
	Input,
	Form,
	Item
} from 'native-base';
import ItemCard from './itemCard';
import itemStore from '../../stores/itemStore';
import { observer } from 'mobx-react';

class ItemList extends Component {
	state = {
		items : null
	};
	handleSearch = (query) => {
		console.log('query', query);
		itemStore.query = query;
	};

	render() {
		let items = itemStore.filteredItems;
		const itemCard = items.map((item) => {
			return <ItemCard key={item.id} item={item} navigation={this.props.navigation} />;
		});

		if (itemStore.loading) {
			return (
				<Container style={styles.container}>
					<Content>
						<Text>loading</Text>
					</Content>
				</Container>
			);
		}

		return (
			<Container style={styles.container}>
				<Content>
					<Input
						style={styles.textHigligted}
						placeholder="Search..."
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={this.handleSearch}
					/>
					{itemCard}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container     : {
		backgroundColor : '#422D56'
	},
	card          : {
		borderRadius    : 4,
		borderWidth     : 0.5,
		borderColor     : '#116466',
		backgroundColor : '#000000'
	},
	textHigligted : { color: 'white' }
});

export default observer(ItemList);
