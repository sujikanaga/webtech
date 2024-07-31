import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }

  buyNow(product: Product): void {
    this.router.navigate(['/checkout'], { state: { product } });
  }
}