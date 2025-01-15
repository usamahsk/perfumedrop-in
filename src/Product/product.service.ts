
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import {  Products} from "./product.entity";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async create(productPayload:Products){
    console.log(productPayload)
    return await this.productsRepository.insert(productPayload)
  }

  async findAll(): Promise<Products[]> {
    return await this.productsRepository.find();
  }

  async findOne(_id): Promise<Products | null> {
    return await this.productsRepository.findOne({where:{_id}});
  }

  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
