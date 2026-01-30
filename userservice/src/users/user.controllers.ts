import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: Partial<User>): Promise<User> {
    return this.usersService.create(user);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':email')
  async findOne(@Param('email') email: string): Promise<User | null> {
    return this.usersService.findOneByEmail(email);
  }
}
