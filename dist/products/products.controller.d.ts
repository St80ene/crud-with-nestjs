import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    addProduct(productTitle: string, productDescription: string, productPrice: number): any;
    getAllProducts(): any;
    getOneProduct(productId: string): any;
}
