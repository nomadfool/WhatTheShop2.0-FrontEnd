import axios from "axios";
import { decorate, observable, action, computed } from "mobx";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class ItemStore {
  items = [];
  loading = true;

  fetchAllPost = async () => {
    try {
      const res = await instance.get("api/list/");
      const items = res.data;
      this.items = items;
      this.loading = false;
      //   console.log(this.posts[0].id);
    } catch (error) {
      console.log(error);
    }
  };
}

decorate(ItemStore, {
  items: observable,
  loading: observable
});

const itemStore = new ItemStore();
itemStore.fetchAllPost();
export default itemStore;
