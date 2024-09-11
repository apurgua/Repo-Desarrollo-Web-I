import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsEntity } from './products/products.entity'

@Module({
  imports: [ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'MySQL2023**',
      database: 'product_bd',
      entities: [ProductsEntity],
      synchronize: true,
    }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
