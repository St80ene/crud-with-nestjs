import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): any {
    const ourProduct = this.productService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );

    return ourProduct;
  }

  @Get()
  getAllProducts(): any {
    return this.productService.fetchProducts();
  }

  @Get(':id')
  getOneProduct(@Param('id') productId: string): any {
    return this.productService.fetchSingleProduct(productId);
  }
}
