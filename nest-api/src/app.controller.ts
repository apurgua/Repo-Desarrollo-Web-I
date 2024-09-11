import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("productos")
  getAllProduct(): {} {
    const allProducts = this.appService.getAllProducto();
    if(!allProducts){
      return "Error al obtener prodcutos";
    }
    return allProducts;
  }

  @Get("productos/:id") // (:id) es un parametro de ruta dinamica, cualquier valor que venga despues de prodcu/ se entendera que es el valor de id
  getProductoPorId(@Param("id") id: string): {} { // @Param es un decorador oara sacar parametros de la url, esta tomando el valor de id, id debe coincidir con el nombre de id de la ruta
                                // id: String es el parametro del metodo que es una cadena
    const idProducto = Number(id)
    return this.appService.getProductoPorId(idProducto);
  }
}


