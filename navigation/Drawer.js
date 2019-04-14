import React from 'react';
import { createDrawerNavigator, createAppContainer, DrawerItems } from 'react-navigation';
import { SafeAreaView, ScrollView, View, Image } from 'react-native';
import { Text } from 'native-base';

//navigators
import BottomTab from './BottomTab';
import CartStack from './CartStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

// stores
import authStore from '../stores/authStore';
const getImage = () => {
	if (authStore.user) {
		return authStore.user.profile_image
			? {
					uri : user.profile_image
				}
			: require('../assets/profile.png');
	} else {
		return require('../assets/profile.png');
	}
};
const handleLogout = () => {
	authStore.logoutUser();
};
const logout = () => {
	if (authStore.user) {
		return (
			<Text style={{ color: '#FF7E5F' }} onPress={handleLogout}>
				Logout
			</Text>
		);
	}
};
const customDrawerComponent = (props) => (
	<SafeAreaView style={{ flex: 1, backgroundColor: '#351C4D' }}>
		<View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
			<Image source={getImage()} style={{ height: 120, width: 120, borderRadius: 60 }} />
		</View>
		<ScrollView>
			<DrawerItems {...props} />
			{/* {logout()} */}
		</ScrollView>
	</SafeAreaView>
);

const Drawer = createDrawerNavigator(
	{
		Home    : { screen: BottomTab },
		Cart    : { screen: CartStack },
		Profile : { screen: ProfileStack }
	},
	{
		contentComponent : customDrawerComponent,
		initialRouteName : 'Home',
		contentOptions   : {
			activeTintColor   : '#FF7E5F',
			inactiveTintColor : 'white'
		}
	}
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer;
