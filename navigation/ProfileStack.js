import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../components/Profile';
import React from 'react';
import { Icon } from 'native-base';

import LoginScreen from '../components/Login';
import RegistrationScreen from '../components/Registration';
import EditProfile from '../components/Profile/editProfile';
import Address from '../Address/Address';
import EditAddress from '../Address/EditAddress';
import ViewAddress from '../Address/ViewAddress';
import UserOrderHistory from "../components/Profile/UserOrderHistory";
import OrderItems from "../components/Profile/OrderItems";

const ProfileStack = createStackNavigator(
	{
		Profile     : ProfileScreen,
		Login       : LoginScreen,
		Register    : RegistrationScreen,
		EditProfile : EditProfile,
		Address     : Address,
		EditAddress : EditAddress,
		ViewAddress : ViewAddress,
    orderHistory: UserOrderHistory,
    OrderItems: OrderItems
	},
	{
		initialRouteName         : 'Login',
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

export default ProfileStack;
