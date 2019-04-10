import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Text, Content, Item, Input, Form } from 'native-base';
import addressStore from '../stores/addressStore';

class EditAddress extends Component {
	state = {
		user         : this.props.navigation.getParam('user').id,

		country      : this.props.navigation.getParam('user').address.country,
		city         : this.props.navigation.getParam('user').address.city,
		state        : this.props.navigation.getParam('user').address.state,
		zipcode      : this.props.navigation.getParam('user').address.zipcode,
		street_line1 : this.props.navigation.getParam('user').address.street_line1,
		street_line2 : this.props.navigation.getParam('user').address.street_line2
	};

	handleEditAddress = () => {
		const addressID = this.props.navigation.getParam('user').address;
		console.log('hhhhhhhhhh', addressID.id);
		addressStore.EditAddress(addressID.id, this.state);
		console.log('edit address store ');
		this.props.navigation.navigate('profile');
	};
	handleDeleteAddress = () => {
		const addressID = this.props.navigation.getParam('user').address;
		const navigation = this.props.navigation;
		console.log('hhhhhhhhhh', addressID.id);
		addressStore.DeleteAddress(addressID.id, navigation);
		console.log('delete address store ');
	};
	render() {
		const { country, city, state, zipcode, street_line1, street_line2 } = this.state;
		return (
			<Container style={styles.container}>
				<Content>
					<Form style={{ width: 300 }}>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="Country"
								value={country}
								style={{ color: 'white', marginBottom: 5 }}
								onChangeText={(country) => this.setState({ country })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="State"
								value={state}
								style={{ color: 'white', marginBottom: 5 }}
								onChangeText={(state) => this.setState({ state })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="City"
								value={city}
								style={{ color: 'white', marginBottom: 5 }}
								onChangeText={(city) => this.setState({ city })}
							/>
						</Item>
						<Item rounded>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="street line 1"
								value={street_line1}
								style={{ color: 'white', marginBottom: 5 }}
								onChangeText={(street_line1) => this.setState({ street_line1 })}
							/>
						</Item>
						<Item rounded last>
							<Input
								autoCapitalize="none"
								autoCorrect={false}
								placeholder="street line 2"
								value={street_line2}
								style={{ color: 'white', marginBottom: 5 }}
								onChangeText={(street_line2) => this.setState({ street_line2 })}
							/>
						</Item>
						<Button
							style={{ alignSelf: 'center', margin: 5 }}
							transparent
							onPress={() => this.handleEditAddress()}
						>
							<Text style={{ color: '#FF7E5F' }}>Add Address</Text>
						</Button>
						<Button style={{ alignSelf: 'center' }} transparent onPress={() => this.handleDeleteAddress()}>
							<Text style={{ color: '#FF7E5F' }}>Delete Address</Text>
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
export default EditAddress;
