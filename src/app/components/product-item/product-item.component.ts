import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  //@ts-ignore
  @Input() product: Product;
  quantity: number = 1;
  quantities:Array<number> = [1,2,3,4,5]
  constructor() { }

  ngOnInit(): void {
  }

  addToCart():void {
    console.log(this.product, this.quantity)
  }

}
