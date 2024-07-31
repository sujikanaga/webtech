import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Order } from '../product.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.orders = this.productService.getOrders();
  }
}
