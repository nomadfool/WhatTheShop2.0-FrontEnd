import React from 'react';
import { Icon } from 'native-base';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';
// import ProfileStack from './ProfileStack';
import CartStack from './CartStack';
import Catagories from '../components/Home/Catagories';
import Search from '../components/Search';

const BottomTab = createBottomTabNavigator(
	{
		Home       : HomeStack,
		Catagories : Catagories,
		Search     : Search,
		Cart       : CartStack
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
				} else if (routeName === 'Search') {
					iconName = 'search';
					iconType = 'MaterialIcons';
				} else if (routeName === 'Cart') {
					iconName = 'shopping-cart';
					iconType = 'FontAwesome';
				}
				return <Icon name={iconName} style={{ color: tintColor }} type={iconType} />;
			}
		}),
		tabBarOptions            : {
			showLabel         : false,
			activeTintColor   : '#6200EE',
			inactiveTintColor : '#858585',
			style             : {
				backgroundColor : 'white'
			},
			labelStyle        : {
				fontSize : 12
			}
		}
	}
);

const AppContainer = createAppContainer(BottomTab);

export default BottomTab;
