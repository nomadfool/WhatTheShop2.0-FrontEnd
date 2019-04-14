import React, { Component } from 'react';
import { observer } from 'mobx-react';

// NativeBase Components

import { Form, Item, Input, Button, Text, Container, Content } from 'native-base';

// Store
import authStore from '../../stores/authStore';

class Registration extends Component {
	state = {
		username   : '',
		email      : '',
		password   : '',
		first_name : '',
		last_name  : ''
	};

	handlesubmit = () => {
		console.log('registration state', this.state);
		authStore.registerUser(this.state, this.props.navigation);
	};

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
						<Item>
							<Input
								style={{ color: 'white' }}
								placeholder="email"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(email) => this.setState({ email })}
							/>
						</Item>
						<Item>
							<Input
								style={{ color: 'white' }}
								placeholder="Password"
								autoCapitalize="none"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(password) => this.setState({ password })}
							/>
						</Item>
						<Item>
							<Input
								style={{ color: 'white' }}
								placeholder="First Name"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(first_name) => this.setState({ first_name })}
							/>
						</Item>
						<Item last>
							<Input
								style={{ color: 'white' }}
								placeholder="Last Name"
								autoCapitalize="none"
								autoCorrect={false}
								onChangeText={(last_name) => this.setState({ last_name })}
							/>
						</Item>

						<Button full transparent onPress={() => this.handlesubmit()}>
							<Text style={{ color: '#FF7E5F' }}>Register</Text>
						</Button>
					</Form>
				</Content>
			</Container>
		);
	}
}
export default observer(Registration);
