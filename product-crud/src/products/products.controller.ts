import { Controller, Post, Body, Get, Delete, Patch, Param, ParseIntPipe} from '@nestjs/common';
import { CreateProductDTO } from './dto/productoDTO';
import { ProductsService } from './products.service';
import { UpdateProductDTO } from './dto/updateProductDTO';

@Controller('product')
export class ProductsController {

    constructor(private productService: ProductsService) { }

    @Get()
    getProducts(){
        return this.productService.getProducts()
    } 

    @Get(':id')
    getProductById(@Param('id', ParseIntPipe) id: number ){
        return this.productService.getProductById(id)
    } 

    // Crear un nuevo producto (validar los datos de entrada).
    @Post()
    createProduct(@Body() newProduct: CreateProductDTO[]) {
        return this.productService.createProduct(newProduct)
    }

    @Delete(':id')
    deleteProduct(@Param('id', ParseIntPipe) id: number){
        return this.productService.deleteProduct(id)
    }

    @Patch(':id')
    updateProduct(@Param('id' , ParseIntPipe) id: number, @Body() product: UpdateProductDTO){
        return this.productService.updateProduct(id, product)
    }

}
