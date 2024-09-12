import { Controller, Post, Body, Get, Delete, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { CreateProductDTO } from './dto/productoDTO';
import { ProductsService } from './products.service';
import { UpdateProductDTO } from './dto/updateProductDTO';

@Controller('product')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Get()
    getProducts() {
        return this.productService.getProducts()
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(id)
    }

    @Post()
    async createProduct(@Body() products: CreateProductDTO | CreateProductDTO[]) {
        // Si solo se envía un producto, lo convertimos en un array de un solo elemento
        const productsArray = Array.isArray(products) ? products : [products];
        return this.productService.createProduct(productsArray);
    }


    @Delete(':id')
    deleteProduct(@Param('id') id: string) {
        return this.productService.deleteProduct(id)
    }

    @Patch(':id')
    updateProduct(@Param('id') id: string, @Body() product: UpdateProductDTO) {
        return this.productService.updateProduct(id, product)
    }

}
