import { decorate, computed, observable } from "mobx";

class CartStore {
  items = [];

  addItemsToCart = item => {
    // console.log("this is item in Store: ", item);
    const foundItem = this.items.find(cartItem => {
      return cartItem.id == item.id;
    });

    if (foundItem) {
      item.cartQuantity += 1;
      console.log("item.cartQuantity", item.cartQuantity);
    } else {
      item.cartQuantity = 1;
      this.items.push(item);
    }
  };
}

decorate(CartStore, {
  items: observable
});
const cartStore = new CartStore();

export default cartStore;
