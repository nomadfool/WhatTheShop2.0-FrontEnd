import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class Store {
  user = null;

  setAuthToken = async token => {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
      await AsyncStorage.setItem("myToken", token);
    } else {
      delete axios.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");

    if (token) {
      const currentDate = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentDate) {
        this.setAuthToken(token);
      } else {
        this.setUser();
      }
    }
  };

  logoutUser = navigation => {
    this.setAuthToken();
    navigation.replace("Login");
    console.log("bye bye ");
  };

  loginUser = async (userData, navigation) => {
    try {
      const res = await instance.post("/api/login/", userData);
      const user = res.data;
      this.setAuthToken(user.token);
      console.log("You are Logged in");
      navigation.replace("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  registerUser = async (userData, navigation) => {
    try {
      console.log(userData);
      await instance.post("/api/register/", userData);

      this.loginUser(userData, navigation);
      //   this.setAuthToken(data.token);
      //   console.log("You Are Signed in");
      //   navigation.replace("Profile");
    } catch (error) {
      console.log("something went wrong registering", error.Date);
    }
  };
}

decorate(Store, {
  user: observable
});
const authStore = new Store();
authStore.checkForToken();
export default authStore;
