import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.cart = this.productService.getCart();
  }
}
