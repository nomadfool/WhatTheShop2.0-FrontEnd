import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import AppContainer from './navigation/Drawer';

export default class App extends React.Component {
	render() {
		StatusBar.setBarStyle('light-content', true);
		return <AppContainer />;
	}
}
