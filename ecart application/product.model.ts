export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
  
  export interface Order {
    product: Product;
    name: string;
    address: string;
    paymentMode: string;
  }