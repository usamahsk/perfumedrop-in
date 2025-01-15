import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Orders } from './orders.entity';

@Controller('order')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @Post('create')
  createUser(@Body() insertPayload:Orders): Promise<any>  {
    return this.orderService.create(insertPayload);
  }

  @Get('list')
  getOrderList():Promise<any>{
    return this.orderService.findAll({})
  }

  @Get('detail/:userId')
  getSingleUserOrder(userId):Promise<any>{
    return this.orderService.findAll(userId)
  }
}
