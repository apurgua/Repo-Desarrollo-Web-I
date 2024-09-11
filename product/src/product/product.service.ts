import { Injectable } from '@nestjs/common';
import { Product } from './product.entity'
import { v4 } from 'uuid'

@Injectable()
export class ProductService {
    private prod: Product[] = [{ "id": '1', "name": "Laptop HP", "price": 750.00, "category": "Electrónica", "status": 1 },
    { "id": '2', "name": "Smartphone Samsung", "price": 450.00, "category": "Electrónica", "status": 1 },
    { "id": '3', "name": "Teclado Mecánico", "price": 80.00, "category": "Accesorios", "status": 1 },
    { "id": '4', "name": "Monitor 24 pulgadas", "price": 220.00, "category": "Electrónica", "status": 1 },
    { "id": '5', "name": "Silla Ergonomica", "price": 150.00, "category": "Mobiliario", "status": 1 },
    { "id": '6', "name": "Auriculares Inalámbricos", "price": 120.00, "category": "Accesorios", "status": 1 },
    { "id": '7', "name": "Cámara Web", "price": 60.00, "category": "Electrónica", "status": 1 },
    { "id": '8', "name": "Impresora Multifunción", "price": 130.00, "category": "Electrónica", "status": 1 },
    { "id": '9', "name": "Mouse Inalámbrico", "price": 25.00, "category": "Accesorios", "status": 1 },
    { "id": '10', "name": "Router Wi-Fi", "price": 70.00, "category": "Redes", "status": 1 },
    { "id": '11', "name": "Tablet Lenovo", "price": 300.00, "category": "Electrónica", "status": 1 },
    { "id": '12', "name": "Disco Duro Externo", "price": 95.00, "category": "Almacenamiento", "status": 1 },
    { "id": '13', "name": "Cargador Portátil", "price": 45.00, "category": "Accesorios", "status": 1 },
    { "id": '14', "name": "Proyector LED", "price": 180.00, "category": "Electrónica", "status": 1 },
    { "id": '15', "name": "USB 64GB", "price": 20.00, "category": "Almacenamiento", "status": 1 },
    { "id": '16', "name": "Lámpara de Escritorio", "price": 35.00, "category": "Mobiliario", "status": 1 },
    { "id": '17', "name": "Micrófono USB", "price": 55.00, "category": "Accesorios", "status": 1 },
    { "id": '18', "name": "Adaptador HDMI", "price": 15.00, "category": "Accesorios", "status": 1 },
    { "id": '19', "name": "Altavoces Bluetooth", "price": 110.00, "category": "Electrónica", "status": 1 },
    { "id": '20', "name": "Bolígrafo Digital", "price": 85.00, "category": "Accesorios", "status": 1 }];

    getAllProducts() {
        const returnProduct = [];
        const prodArray = this.prod;

        // Recorremos todo el array
        for (let i = 0; i < prodArray.length; i++) {
            const resul = prodArray[i];
            if (resul.status === 1) {
                returnProduct.push(resul);  // Agregamos el producto al array de resultados
            }
        }
        return returnProduct;
    }

    getProductByID(id: String) {
        const products = this.getAllProducts;
        if(products.find(product => product.id === id)){

        }
        return this.prod.find()

    }

    createProduct(name: String, price: number, category: String, status: number) {
        const product = {
            id: v4(),
            name,
            price,
            category,
            status,
        };
        this.prod.push(product);
        return product;
    }

    deleteProduct(id: String) {
        const prodArray = this.prod;
        // Buscar el producto por su ID
        for (let i = 0; i < prodArray.length; i++) {
            if (prodArray[i].id === id) {
                prodArray[i].status = 0; // Cambiar el estatus a 0
                return { message: `Producto con ID ${id} ha sido eliminado.` };
            }
        }
        return { message: `Producto con ID ${id} no encontrado.` };
    }
}





















