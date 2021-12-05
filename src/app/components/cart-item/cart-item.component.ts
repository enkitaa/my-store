import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  //@ts-ignore
  @Input() cartItem: CartItem;
  constructor() {}

  ngOnInit(): void {}
}
