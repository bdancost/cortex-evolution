import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

type RequestWithUser = Request & {
  user: {
    id: string;
    email: string;
  };
};

@Controller('appointments')
export class AppointmentsController {
  constructor(private service: AppointmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: { date: string }, @Request() req: RequestWithUser) {
    return this.service.create(req.user.id, new Date(body.date));
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.service.findAll();
  }
}
