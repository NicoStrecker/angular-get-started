import { Component, OnInit } from '@angular/core';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  sum: number;

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.sum = this.cartService.getSumOfAll();
  }

  deleteItem(itemId){
    this.cartService.deleteItem(itemId);
    this.sum=this.cartService.getSumOfAll();
  }

}