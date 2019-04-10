import React, { Component } from 'react';
import authStore from '../../stores/authStore';
import profileStore from '../../stores/profileStore';
import UserOrderHistory from './UserOrderHistory';

import { Container, Left, Content, Thumbnail, ListItem, Text, Button, View, Right, Spinner } from 'native-base';
import { observer } from 'mobx-react';
import { StyleSheet } from 'react-native';

class Profile extends Component {
	getImage = () => {
		if (authStore.user) {
			return authStore.user.profile_image
				? {
						uri : user.profile_image
					}
				: require('../../assets/profile.png');
		} else {
			return require('../../assets/profile.png');
		}
	};
	handleLogout = () => {
		const navigation = this.props.navigation;
		authStore.logoutUser(navigation);
		this.props.navigation.replace('Login');
	};

	componentDidMount() {
		const user = authStore.user;
		profileStore.retraiveUserProfile(user);
	}

	render() {
		const user = profileStore.user;

		const navigation = this.props.navigation;
		if (!user) {
			return (
				<Container style={{ backgroundColor: '#422D56' }}>
					<Spinner color={'white'} />
				</Container>
			);
		}
		return (
			<Container
				style={{
					backgroundColor : '#422D56'
				}}
			>
				<Content>
					<Thumbnail
						style={{ width: 150, height: 150, borderRadius: 150 / 2, alignSelf: 'center' }}
						source={this.getImage()}
					/>

					<Text style={{ marginTop: 8, alignSelf: 'center', color: 'white' }}>{user.username}</Text>

					<ListItem>
						<Text style={styles.text}>
							Name: {user.first_name} {user.last_name}
						</Text>
					</ListItem>
					<ListItem>
						<Text style={styles.text}>Email: {user.email}</Text>
					</ListItem>
					{!user.profile.phone ? (
						<ListItem Button onPress={() => navigation.navigate('EditProfile', { user: user })}>
							<Text style={styles.text}>Add Phone Number</Text>
						</ListItem>
					) : (
						<ListItem Button onPress={() => navigation.navigate('EditProfile', { user: user })}>
							<Text style={styles.text}>Phone: {user.profile.phone}</Text>
						</ListItem>
					)}
					{!user.address ? (
						<ListItem Button onPress={() => navigation.navigate('Address', { user: user })}>
							<Text style={styles.text}>Create Address</Text>
						</ListItem>
					) : (
						<ListItem
							last
							Button
							style={{ marginTop: 5 }}
							onPress={() => navigation.navigate('ViewAddress', { user: user })}
						>
							<Left>
								<Text style={styles.text}>Address</Text>
							</Left>

							<Right>
								<Button transparent onPress={() => navigation.navigate('EditAddress', { user: user })}>
									<Text style={styles.text}>Edit</Text>
								</Button>
							</Right>
						</ListItem>
					)}
					<ListItem
						last
						Button
						style={{ marginTop: 5 }}
						onPress={() => navigation.navigate('orderHistory', { user: user })}
					>
						<Text style={styles.text}>Order History</Text>
					</ListItem>

					<Button danger style={{ marginTop: 8 }} onPress={() => authStore.logoutUser(navigation)}>
						<Text>Logout</Text>
					</Button>
				</Content>
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

export default observer(Profile);
