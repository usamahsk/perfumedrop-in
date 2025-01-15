
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './product.entity';
import { ProductsService } from './product.service';
import { ProductController } from './product.controller';
import { ProductAggregateService } from './product.aggregate.service';
import { OrdersModule } from '../Orders/orders.module';
import { UsersModule } from '../Users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Products]),OrdersModule,UsersModule],
  providers: [ProductsService,ProductAggregateService],
  controllers: [ProductController],
})
export class ProductModule {

}
