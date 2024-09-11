import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  private productos = [{ "id": 1, "nombre": "Laptop HP", "precio": 750.00, "categoria": "Electrónica" },
    { "id": 2, "nombre": "Smartphone Samsung", "precio": 450.00, "categoria": "Electrónica" },
    { "id": 3, "nombre": "Teclado Mecánico", "precio": 80.00, "categoria": "Accesorios" },
    { "id": 4, "nombre": "Monitor 24 pulgadas", "precio": 220.00, "categoria": "Electrónica" },
    { "id": 5, "nombre": "Silla Ergonomica", "precio": 150.00, "categoria": "Mobiliario" },
    { "id": 6, "nombre": "Auriculares Inalámbricos", "precio": 120.00, "categoria": "Accesorios" },
    { "id": 7, "nombre": "Cámara Web", "precio": 60.00, "categoria": "Electrónica" },
    { "id": 8, "nombre": "Impresora Multifunción", "precio": 130.00, "categoria": "Electrónica" },
    { "id": 9, "nombre": "Mouse Inalámbrico", "precio": 25.00, "categoria": "Accesorios" },
    { "id": 10, "nombre": "Router Wi-Fi", "precio": 70.00, "categoria": "Redes" },
    { "id": 11, "nombre": "Tablet Lenovo", "precio": 300.00, "categoria": "Electrónica" },
    { "id": 12, "nombre": "Disco Duro Externo", "precio": 95.00, "categoria": "Almacenamiento" },
    { "id": 13, "nombre": "Cargador Portátil", "precio": 45.00, "categoria": "Accesorios" },
    { "id": 14, "nombre": "Proyector LED", "precio": 180.00, "categoria": "Electrónica" },
    { "id": 15, "nombre": "USB 64GB", "precio": 20.00, "categoria": "Almacenamiento" },
    { "id": 16, "nombre": "Lámpara de Escritorio", "precio": 35.00, "categoria": "Mobiliario" },
    { "id": 17, "nombre": "Micrófono USB", "precio": 55.00, "categoria": "Accesorios" },
    { "id": 18, "nombre": "Adaptador HDMI", "precio": 15.00, "categoria": "Accesorios" },
    { "id": 19, "nombre": "Altavoces Bluetooth", "precio": 110.00, "categoria": "Electrónica" },
    { "id": 20, "nombre": "Bolígrafo Digital", "precio": 85.00, "categoria": "Accesorios" }];

  // Metodo para devolver todos los productos
  getAllProducto(): {}{
    return this.productos;
  }

  // Metodo para buscar un producto por medio de su ID
  getProductoPorId(id: number): {} {
    const prod =  this.productos;

      if(prod.find(producto => producto.id === id)){
        return prod.find(producto => producto.id === id);
      } else{
        return "Producto no existe";
      }  
  }
}
cd 