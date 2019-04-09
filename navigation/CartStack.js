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
			title            : 'Cart',
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

export default CartStack;
