
import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from './orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders]),OrdersModule],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports:[OrdersService]
})
export class OrdersModule {}
