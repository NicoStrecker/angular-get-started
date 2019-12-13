import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items  = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  deleteItem(itemId) {
    this.items.splice(itemId, 1);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getSumOfAll(): number {
    let sum: number=0;
    this.items.forEach((item) => {
      sum += item.price;
      console.dir(item);
    });
    return sum;
  }
}
