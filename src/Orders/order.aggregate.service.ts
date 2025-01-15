import { UsersService } from "../Users/users.service";
import { Orders } from "./orders.entity";
import { OrdersService } from "./orders.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderAggregateService {

    constructor(
        private readonly usersRepository: UsersService,
        private readonly orderService: OrdersService
    ) { }

    
    async createOrder(orderDto: Orders) {
        const user = await this.usersRepository.findOne(orderDto.user_id)
        const product = await this.usersRepository.findOne(orderDto.user_id)
        if (!user)
            throw new Error(`User ${orderDto.id} not exist.`);
        if (!product)
            throw new Error(`User ${orderDto.product_id} not exist.`);
        return await this.orderService.create(orderDto)
    }

    async fetchUserOrders(user_id:string) {
        const user = await this.usersRepository.findOne(user_id)
        return await this.orderService.findAll(user_id) 
        
    }





}