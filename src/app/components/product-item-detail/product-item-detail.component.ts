import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from './../../models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  itemId: number = 0;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }
  quantity: number = 1;
  quantities: Array<number> = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = Number(params.get('id'));
    });

    this.productService.getProducts().subscribe((res: Product[]) => {
      this.product = res.filter(({ id }) => id === this.itemId)[0];
    });
  }

  addToCart() {
    this.cartService.addProduct(this.product, this.quantity);
  }
}
