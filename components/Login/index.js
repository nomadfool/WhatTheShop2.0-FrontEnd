import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components

import Registration from '../Registration/index';

import { Form, Item, Input, Button, Text, Container, Content } from 'native-base';

// Store
import authStore from '../../stores/authStore';

class Login extends Component {
	state = {
		username : '',
		password : ''
	};

	handlesubmit = () => {
		authStore.loginUser(this.state, this.props.navigation);
	};

	componentDidMount() {
		if (authStore.user) this.props.navigation.replace('Profile');
	}

	render() {
		return (
			<Container>
				<Content
					contentContainerStyle={{
						flex            : 1,
						alignItems      : 'center',
						justifyContent  : 'center',
						backgroundColor : '#422D56'
					}}
				>
					<Form style={{ width: '80%' }}>
						<Item>
							<Input
								style={{ color: 'white' }}
								placeholder="Username"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(username) => this.setState({ username })}
							/>
						</Item>
						<Item last>
							<Input
								style={{ color: 'white' }}
								placeholder="Password"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
						<Button
							full
							transparent
							style={{ marginBottom: 10, marginTop: 5 }}
							onPress={() => this.handlesubmit()}
						>
							<Text style={{ color: '#FF7E5F' }}>Login</Text>
						</Button>
						<Button full transparent onPress={() => this.props.navigation.navigate('Register')}>
							<Text style={{ color: '#FF7E5F' }}>Register</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
export default observer(Login);
