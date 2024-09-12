import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProductsEntity } from './products.entity'
import { CreateProductDTO } from '../products/dto/productoDTO'
import { UpdateProductDTO } from './dto/updateProductDTO';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>,
  ) { }




  async createProduct(products: CreateProductDTO[]) {
    const newProducts = [];

    for (const prod of products) {
      const productFound = await this.productsRepository.findOne({
        where: { NAME_PROD: prod.NAME_PROD },
      });
      if (productFound) {
        continue; // Continúa al siguiente producto en el array
      }
      const newProduct = this.productsRepository.create(prod);
      newProducts.push(newProduct);
    }

    // Guardamos los nuevos productos si hay al menos uno
    if (newProducts.length > 0) {
      return this.productsRepository.save(newProducts);
    } else {
      return new HttpException('No new products to save', HttpStatus.CONFLICT);
    }
  }








  getProducts() {
    return this.productsRepository.find()
  }

  async getProductById(id: string) {

    const productFound = await this.productsRepository.findOne({
      where: {
        // id parametro debe coincidir con ID_PROD de la entity de ORM
        ID_PROD: id
      }
    })

    if (!productFound) {
      return new HttpException("Product Not Found", HttpStatus.NOT_FOUND)
    } else {
      return productFound
    }
  }


  async deleteProduct(id: string) {
    // La primera forma de hacerlo es la que se hizo en createProduct o en getProductById
    // Cuando se elimina un objeto, la sentencia devuelve un affected = 1, en caso de eliminacion y 0 en caso de na ha eliminado nada
    const result = await this.productsRepository.delete(id);
    if (result.affected === 0) {
      return new HttpException("Product Not Fund to Delete", HttpStatus.NOT_FOUND)
    } else {
      return result;
    }
  }

  async updateProduct(id: string, product: UpdateProductDTO) {
    const productFound = await this.productsRepository.findOne({
      where: { ID_PROD: id }
    })
    if (!productFound) {
      return new HttpException("Product Not Fund to Update", HttpStatus.NOT_FOUND)
    } else {
      const updateProduct = Object.assign(productFound, product);
      return this.productsRepository.update(id, updateProduct);
    }
  }
}
