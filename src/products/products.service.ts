import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  products: Product[] = []; // array of products initialized to empty array

  insertProduct(title: string, description: string, price: number): any {
    const productId = new Date().toString();
    const newProduct = new Product(productId, title, description, price);

    this.products.push(newProduct);

    return {
      id: newProduct.id,
      title: newProduct.title,
      description: newProduct.description,
    };
  }

  fetchProducts(): any {
    return [...this.products];
  }

  fetchSingleProduct(productId: string): any {
    const requestedProduct = this.products.find((p) => p.id === productId);
    return requestedProduct;
  }
}
