import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) { }

  @Post('create')
  createUser(@Body() insertPayload: Users): any {
    return this.usersService.create(insertPayload);
  }

  @Get('list')
  getUsersList(): Promise<any> {
    return this.usersService.findAll()
  }

  @Get('detail/:userId')
  getUserDetail(userId): Promise<any> {
    return this.usersService.findOne(userId)
  }
}
