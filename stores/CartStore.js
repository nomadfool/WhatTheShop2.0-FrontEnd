import { decorate, computed, observable } from "mobx";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

class CartStore {
  items = [];
  itemsAdded = [];
  cart = null;
  carts = [];
  history = [];
  loading = true;
  cartItems = [];
  loadingHistory = true;
  total = 0;

  addItemsToCart = async (item, quantity) => {
    item.quantity = quantity;
    this.items.push(item);

    try {
      const res = await instance.post("api/cart/", {
        item: item.id,
        quantity: quantity
      });
      this.total += Number(item.price) * Number(item.quantity);
      const data = res.data;
      this.cart = data;
    } catch (err) {
      console.log(err);
    }
  };

  checkout = async (cartID, status) => {
    try {
      console.log(cartID.cart, "before");
      const res = await instance.get(`api/checkout/`);
      console.log("After");
      const data = res.data;
      console.log("data", data);
    } catch (error) {
      console.log(error);
    }
  };

  getHistoryOrder = async userId => {
    try {
      const res = await instance.get("api/history/");
      const data = res.data;
      this.carts = data;

      this.history = this.carts.filter(
        userCart => userCart.user === userId && userCart.status === true
      );
      this.loadingHistory = false;
    } catch (error) {
      console.log(error);
    }
  };
  getHistoryCartItem = async cartID => {
    try {
      const res = await instance.get(`api/cart/${cartID}/`);
      const data = res.data;
      this.cartItems = data;
      console.log("CARTITEMS", this.cartItems);
    } catch (error) {
      console.log(error);
    }
  };
}
decorate(CartStore, {
  items: observable,
  cart: observable,
  history: observable,
  cartItems: observable,
  loadingHistory: observable,
  loading: observable,
  total: observable
});
const cartStore = new CartStore();

export default cartStore;
