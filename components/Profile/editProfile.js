import React, { Component } from 'react';
import { Text, Button, Input, Container, Content } from 'native-base';
import profileStore from '../../stores/profileStore';
import authStore from '../../stores/authStore';

class EditProfile extends Component {
	state = {
		phone         : this.props.navigation.getParam('user').profile.phone,
		profile_image : null,
		user          : this.props.navigation.getParam('user').profile.user
	};

	handlePhoneNumber = (event) => {
		this.setState({ phone: Number(event) });
	};

	handleEditProfile = (userProfileID) => {
		const navigation = this.props.navigation;
		profileStore.editProfile(userProfileID, this.state, navigation);
	};
	render() {
		const user = this.props.navigation.getParam('user').profile;
		const userProfile = user.id;

		return (
			<Container
				style={{
					flex            : 1,

					alignItems      : 'center',
					justifyContent  : 'center',
					backgroundColor : '#422D56'
				}}
			>
				<Content>
					{this.state.phone == null ? (
						<Input placeholder="Enter your phone number" onChangeText={this.handlePhoneNumber} />
					) : (
						<Input
							value={String(this.state.phone)}
							placeholder="Enter your phone number"
							onChangeText={this.handlePhoneNumber}
						/>
					)}

					<Button onPress={() => this.handleEditProfile(userProfile)}>
						<Text>Save</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default EditProfile;
