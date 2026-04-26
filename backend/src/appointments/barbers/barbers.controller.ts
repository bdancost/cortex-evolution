import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';

import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { RolesGuard } from '../../common/roles/roles.guard';
import { Roles } from '../../common/roles/roles.decorator';
import { Role } from '@prisma/client';

@Controller('barbers')
export class BarbersController {
  constructor(private service: BarbersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN) // ✅ correto
  @Post()
  create(@Body() body: CreateBarberDto) {
    return this.service.create(body.name);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
