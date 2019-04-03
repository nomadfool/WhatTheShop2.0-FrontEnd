import React, { Component } from 'react';
import { Text, Content, Container } from 'native-base';

class Search extends Component {
	// static navigationOptions = {
	// 	title : 'Search'
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
					<Text>Search goes here</Text>
				</Content>
			</Container>
		);
	}
}
export default Search;
