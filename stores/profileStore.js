import axios from "axios";
import { decorate, computed, observable } from "mobx";

class ProfileStore {
  user = null;

  retraiveUserProfile = async userID => {
    try {
      console.log("BEFOR", userID.pro);
      const res = await axios.get(
        `http://127.0.0.1:8000/api/user/${userID.user_id}/data/`
      );
      console.log("AFTER");
      const user = res.data;
      this.user = user;
      // console.log("this is the user", this.user);
    } catch (error) {
      console.log("error setting profile user", error);
    }
  };

  editProfile = async (userProfileID, userData, navigation) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/api/profile/${userProfileID}/edit/`,
        userData
      );
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
    }
  };
}
decorate(ProfileStore, {
  user: observable
});
const profileStore = new ProfileStore();

export default profileStore;
