
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';
import {  Users} from "./users.entity";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(userDto:Users){
    userDto.id=uuidv4()
    return await this.usersRepository.save(userDto)
  }

  async findAll(): Promise<Users[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<Users | null> {
    return await this.usersRepository.findOne({where:{id}})
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
