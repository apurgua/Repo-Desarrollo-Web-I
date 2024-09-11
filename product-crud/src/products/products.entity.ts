import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity('tbl_product2')
export class ProductsEntity {

    @PrimaryGeneratedColumn('uuid')
    ID_PROD: number;
    
    @Column({ unique: true })  // Aquí hacemos que el nombre del producto sea único
    NAME_PROD: string;

    @Column({ nullable: true })
    DESCRIPTION_PROD: String;

    @Column({ nullable: true })
    PRICE_PROD: number;

    @Column({ nullable: true })
    STOCK: number

    // Puede ser nulo, de tipo datetime y por defecto que tome la fecha y hora actual del sistema
    @Column({ nullable: true, type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    DATE_CREATE: Date
}