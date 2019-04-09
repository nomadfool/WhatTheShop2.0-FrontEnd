import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import AppContainer from './navigation/Drawer';

export default class App extends React.Component {
	render() {
		StatusBar.setBarStyle('light-content', true);
		return <AppContainer />;
	}
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});
