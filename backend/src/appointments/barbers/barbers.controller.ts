import { Controller, Post, Body, Get } from '@nestjs/common';
import { BarbersService } from './barbers.service';
import { CreateBarberDto } from './dto/create-barber.dto';

@Controller('barbers')
export class BarbersController {
  constructor(private service: BarbersService) {}

  @Post()
  create(@Body() body: CreateBarberDto) {
    return this.service.create(body.name);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
