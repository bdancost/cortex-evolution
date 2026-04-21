import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

type UserSafe = Prisma.UserGetPayload<{
  select: {
    id: true;
    name: true;
    email: true;
    createdAt: true;
  };
}>;

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(): Promise<UserSafe[]> {
    return this.usersService.findAll();
  }

  @Post()
  create(@Body() body: CreateUserDto): Promise<UserSafe> {
    return this.usersService.create(body);
  }
}
