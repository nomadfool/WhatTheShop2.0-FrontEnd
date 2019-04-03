import { decorate, observable, action, computed } from 'mobx';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import jwt_decode from 'jwt-decode';

const instance = axios.create({
	baseURL : 'http://127.0.0.1:8000/'
});

class Store {
	user = null;

	setAuthToken = async (token) => {
		if (token) {
			// Apply to every request
			axios.defaults.headers.common.Authorization = `JWT ${token}`;
			const decodedUser = jwt_decode(token);
			this.user = decodedUser;
			await AsyncStorage.setItem('jwtToken', token);
		} else {
			delete axios.defaults.headers.common.Authorization;
			await AsyncStorage.removeItem('jwtToken');
			this.user = null;
		}
	};

	logoutUser = () => {
		this.setAuthToken();
	};

	loginUser = async (userData, navigation) => {
		try {
			let res = await instance.post('/api/login/', userData);
			let user = res.data;
			const { token } = user;

			// Save token to localStorage

			await this.setAuthToken(token);
			navigation.navigate('HomeTab');
		} catch (err) {
			console.log('something went wrong logging in', err);
		}
		console.log('login successful');
	};

	checkForToken = async () => {
		let token = await AsyncStorage.getItem('jwtToken');

		if (token) {
			const currentTime = Date.now() / 1000;

			// Decode token and get user info
			const decodedUser = jwt_decode(token);

			// Check token expiration
			if (decodedUser.exp >= currentTime) {
				// Set auth token header
				this.setAuthToken(token);
			} else {
				this.logoutUser();
				// Redirect to login
			}
		}
	};

	registerUser = async (userData, navigation) => {
		try {
			console.log('userData', userData);
			await instance.post('/api/register/', userData);
			this.loginUser(userData, navigation);
		} catch (err) {
			console.log('something went wrong registering', err.Date);
		}
	};
}

decorate(Store, {
	user : observable
});

const authStore = new Store();
authStore.checkForToken();

export default authStore;
