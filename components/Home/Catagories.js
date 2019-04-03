import React, { Component } from 'react';
import { Text, Content, Container } from 'native-base';

export default class Catagories extends Component {
	// static navigationOptions = {
	// 	title : 'Caatagories'
	// };
	render() {
		return (
			<Container>
				<Content
					contentContainerStyle={{
						flex           : 1,
						alignItems     : 'center',
						justifyContent : 'center'
					}}
				>
					<Text>Catagories goes here</Text>
				</Content>
			</Container>
		);
	}
}
