import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components
import { Form, Item, Input, Button, Text } from 'native-base';

// Store
import authStore from '../../stores/authStore';

class Login extends Component {
	state = {
		username : '',
		password : ''
	};

	handlesubmit = () => {
		authStore.loginUser(this.state);
	};

	render() {
		return (
			<Form>
				<Item>
					<Input
						placeholder="Username"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={(username) => this.setState({ username })}
					/>
				</Item>
				<Item last>
					<Input
						placeholder="Password"
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({ password })}
					/>
				</Item>
				<Button full onPress={() => this.handlesubmit()}>
					<Text>Login</Text>
				</Button>
				<Button full onPress={() => this.props.navigation.navigate('Register')}>
					<Text>Register</Text>
				</Button>
			</Form>
		);
	}

}
export default observer(Login);
