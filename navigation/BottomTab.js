import React from 'react';
import { Icon } from 'native-base';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
// import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import Catagories from '../components/Home/Catagories';

const BottomTab = createBottomTabNavigator(
	{
		Home : HomeStack,

		Cart : CartStack
	},
	{
		defaultNavigationOptions : ({ navigation }) => ({
			tabBarIcon : ({ tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = 'home';
					iconType = 'FontAwesome';
				} else if (routeName === 'Catagories') {
					iconName = 'tag-multiple';
					iconType = 'MaterialCommunityIcons';
				} else if (routeName === 'Cart') {
					iconName = 'shopping-cart';
					iconType = 'FontAwesome';
				}
				return <Icon name={iconName} style={{ color: tintColor }} type={iconType} />;
			}
		}),
		tabBarOptions            : {
			showLabel         : false,
			activeTintColor   : '#FF7E5F',
			inactiveTintColor : '#b4b8ab',
			style             : {
				backgroundColor : '#351C4D'
			},
			labelStyle        : {
				fontSize : 12
			}
		}
	}
);

const AppContainer = createAppContainer(BottomTab);

export default BottomTab;
