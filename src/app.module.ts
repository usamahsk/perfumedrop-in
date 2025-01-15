import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './Product/product.entity';
import { Users } from './Users/users.entity';
import { Orders } from './Orders/orders.entity';
import { ProductModule } from './Product/product.module';
import { UsersModule } from './Users/users.module';
import { OrdersModule } from './Orders/orders.module';


@Module({
  imports: [
    UsersModule,
    OrdersModule,
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      port: 27017,
      username: 'root',
      password: 'admin',
      database: 'admin',
      synchronize: false,
      entities:[Products],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      port: 5432,
      username: 'root',
      password: 'admin',
      database: 'admin',
      synchronize: false,
      entities:[Users,Orders],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { 
}

