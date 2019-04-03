import { createDrawerNavigator, createAppContainer } from 'react-navigation';

//navigators
import BottomTab from './BottomTab';
import CartStack from './CartStack';
import HomeStack from './HomeStack';
import ProfileStack from './ProfileStack';

const Drawer = createDrawerNavigator(
	{
		Home    : { screen: BottomTab },

		Cart    : { screen: CartStack },
		Profile : { screen: ProfileStack }
	},
	{
		initialRouteName : 'Home'
	}
);

const AppContainer = createAppContainer(Drawer);

export default AppContainer;
