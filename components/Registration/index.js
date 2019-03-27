import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components
import { Form, Item, Input, Button, Text } from 'native-base';

// Store
import authStore from '../../stores/authStore';

class Registration extends Component {
	state = {
		username : '',
		email    : '',
		password : ''
	};

	handlesubmit = () => {
		authStore.registerUser(this.state);
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
				<Item>
					<Input
						placeholder="email"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={(email) => this.setState({ email })}
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
					<Text>Register</Text>
				</Button>
			</Form>
		);
	}
}
export default observer(Registration);
