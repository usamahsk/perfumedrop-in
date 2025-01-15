
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import {  Orders} from "./orders.entity";
import { v4 as uuidv4 } from "uuid";
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,
  ) {}

  create(ordersDto:Orders):Promise<InsertResult>{
    ordersDto.created_at=new Date()
    return this.ordersRepository.insert(ordersDto)
  }


  findAll(obj): Promise<Orders[]> {
    return this.ordersRepository.find({where:obj});
  }

  findOne(id): Promise<Orders | null> {
    return this.ordersRepository.findOne({ where:{id} });
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
