import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/product.dto';

@Controller()
export class ProductController {

    constructor(private productsService: ProductService) {
    }

    @Get('product')
    getAllProducts() {
        return this.productsService.getAllProducts();
    }

    @Post()
    createProduct(@Body() newProduct: CreateProductDTO) {
        const status: number = 1;
        return this.productsService.createProduct(newProduct.name, newProduct.price, newProduct.category, status);
    }

    @Delete('/product/:id')
    deleteProduct(@Param('id') id: String) {
        return this.productsService.deleteProduct(id);
    }

}
