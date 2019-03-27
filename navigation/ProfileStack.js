import { createStackNavigator } from 'react-navigation';

import ProfileScreen from '../components/Profile';
import React from 'react';
import { Icon } from 'native-base';

import LoginScreen from '../components/Login';
import RegistrationScreen from '../components/Registration';

const ProfileStack = createStackNavigator(
	{
		Profile  : ProfileScreen,
		Login    : LoginScreen,
		Register : RegistrationScreen
	},
	{
		initialRouteName         : 'Login',
		defaultNavigationOptions : {
			title : 'WhatTheShop'
		}
	}
);

export default ProfileStack;
