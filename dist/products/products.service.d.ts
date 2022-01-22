import { Product } from './products.model';
export declare class ProductsService {
    products: Product[];
    insertProduct(title: string, description: string, price: number): any;
    fetchProducts(): any;
    fetchSingleProduct(productId: string): any;
}
