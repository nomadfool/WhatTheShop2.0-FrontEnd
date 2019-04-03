import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../components/Home';
import DetailItem from '../components/Home/DetailItem';
import { Icon } from 'native-base';

const HomeStack = createStackNavigator(
	{
		Home   : HomeScreen,
		Detail : DetailItem
	},
	{
		initialRouteName         : 'Home',
		defaultNavigationOptions : ({ navigation }) => ({
			title      : 'WhatTheShop',
			headerLeft : <Icon name="menu" type="MaterialCommunityIcons" onPress={() => navigation.openDrawer()} />
		})
	}
);

export default HomeStack;
