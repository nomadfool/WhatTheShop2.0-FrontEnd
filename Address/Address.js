import React, { Component } from 'react';
import { Container, Button, Header, Content, Item, Input, Form } from 'native-base';
import { Text, StyleSheet } from 'react-native';
import addressStore from '../stores/addressStore';

class Address extends Component {
	state = {
		user         : this.props.navigation.getParam('user').id,

		country      : '',
		city         : '',
		state        : '',
		zipcode      : '',
		street_line1 : '',
		street_line2 : ''
	};

	handleAddingAddress = () => {
		addressStore.CreateAddress(this.state);
		console.log('send to ADDRESS STORE');
	};
	render() {
		return (
			<Container style={styles.container}>
				<Content>
					<Form style={{ width: 300 }}>
						<Item rounded>
							<Input
								autoCorrect={false}
								placeholder="Country"
								style={{ color: 'white', marginBottom: 2 }}
								onChangeText={(country) => this.setState({ country })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="State"
								style={{ color: 'white', marginBottom: 2 }}
								onChangeText={(state) => this.setState({ state })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="City"
								style={{ color: 'white', marginBottom: 2 }}
								onChangeText={(city) => this.setState({ city })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="street line 1"
								style={{ color: 'white', marginBottom: 2 }}
								onChangeText={(street_line1) => this.setState({ street_line1 })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="street line 2"
								style={{ color: 'white', marginBottom: 2 }}
								onChangeText={(street_line2) => this.setState({ street_line2 })}
							/>
						</Item>
						<Button transparent style={{ alignSelf: 'center' }} onPress={() => this.handleAddingAddress()}>
							<Text style={{ color: '#FF7E5F' }}>Add Address</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container     : {
		flex            : 1,
		backgroundColor : '#422D56',
		alignItems      : 'center',
		justifyContent  : 'center'
	},
	card          : {
		borderRadius : 4,
		borderWidth  : 0.5,
		borderColor  : '#116466'
	},
	textHigligted : { color: 'white' }
});

export default Address;
