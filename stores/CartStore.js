import { decorate, computed, observable } from "mobx";
import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class CartStore {
  items = [];

  addItemsToCart = async (item, quantity) => {
    // console.log("this is item in Store: ", item);
    const foundItem = this.items.find(cartItem => {
      return cartItem.id === item.id;
    });

    if (foundItem) {
      // console.log("item.cartQuantity", item.cartQuantity);
    } else {
      this.items.push(item);
      await instance.post("/api/cart/", {
        item: item.id,
        quantity: quantity
      });
    }
  };

  //   addItemToBE = async item => {
  //     try {
  //       console.log("addItemToBE-items", item);
  //       await instance.post("/api/cart/", item.id, item.cartQuantity);
  //       //   const data = res.data;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // }
}
decorate(CartStore, {
  items: observable
});
const cartStore = new CartStore();

export default cartStore;
