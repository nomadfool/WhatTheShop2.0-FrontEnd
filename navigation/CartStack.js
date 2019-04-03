import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import CartHome from '../components/Cart/CartHome';

const CartStack = createStackNavigator(
	{
		Cart : CartHome
	},
	{
		defaultNavigationOptions : ({ navigation }) => ({
			title      : 'Cart',
			headerLeft : <Icon name="menu" type="MaterialCommunityIcons" onPress={() => navigation.openDrawer()} />
		})
	}
);

export default CartStack;
