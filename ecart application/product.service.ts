import { Injectable } from '@angular/core';
import { Product, Order } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Phone 1', price: 100, description: 'Description 1', imageUrl: 'url1' },
    // Add up to 10 products
  ];
  private cart: Product[] = [];
  private orders: Order[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  getCart(): Product[] {
    return this.cart;
  }

  placeOrder(order: Order): void {
    this.orders.push(order);
  }

  getOrders(): Order[] {
    return this.orders;
  }
}