import { Controller, Post, Body, Get } from '@nestjs/common';
import { BarbersService } from './barbers.service';

@Controller('barbers')
export class BarbersController {
  constructor(private service: BarbersService) {}

  @Post()
  create(@Body() body: { name: string }) {
    return this.service.create(body.name);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
