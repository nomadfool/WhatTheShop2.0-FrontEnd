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
			title            : 'The Emporium',
			headerTintColor  : '#FF7E5F',
			headerTitleStyle : { fontWeight: 'bold' },
			headerStyle      : { backgroundColor: '#351C4D' },
			headerLeft       : (
				<Icon
					name="menu"
					style={{ color: '#FF7E5F' }}
					type="MaterialCommunityIcons"
					onPress={() => navigation.openDrawer()}
				/>
			)
		})
	}
);

export default HomeStack;
