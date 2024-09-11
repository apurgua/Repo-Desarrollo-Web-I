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
        where: { NAME_PROD: prod.NAME_PROD, },
      });

      // Si el producto ya existe, para a revisar el siguiente producto.
      if (productFound) {
        continue;
      }

      // Si no existe, entonces si lo crea
      const newProduct = this.productsRepository.create(prod);
      newProducts.push(newProduct);
    }

    // Guarda todos los productos nuevos que no existían en la base de datos
    // Primero verifica que el array tenga productos para guardar, por eso se evalua su longitud (array)
    if (newProducts.length > 0) {
      return this.productsRepository.save(newProducts);
    } else {
      return new HttpException('Todos los productos ya existen', HttpStatus.CONFLICT);
    }
  }







  getProducts() {
    return this.productsRepository.find()
  }

  async getProductById(id: number) {

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


  async deleteProduct(id: number) {
    // La primera forma de hacerlo es la que se hizo en createProduct o en getProductById
    // Cuando se elimina un objeto, la sentencia devuelve un affected = 1, en caso de eliminacion y 0 en caso de na ha eliminado nada
    const result = await this.productsRepository.delete(id);
    if (result.affected === 0) {
      return new HttpException("Product Not Fund to Delete", HttpStatus.NOT_FOUND)
    } else {
      return result;
    }
  }

  async updateProduct(id: number, product: UpdateProductDTO) {
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
