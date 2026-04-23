import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  Query,
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
  create(
    @Body() body: { date: string; barberId: string },
    @Request() req: RequestWithUser,
  ) {
    return this.service.create(req.user.id, body.barberId, new Date(body.date));
  }

  @UseGuards(JwtAuthGuard)
  @Get('available')
  getAvailable(@Query('date') date: string) {
    return this.service.getAvailableSlots(new Date(date));
  }
  findAll() {
    return this.service.findAll();
  }
}
