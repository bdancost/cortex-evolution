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
import { CreateAppointmentDto } from './dto/create-appointment.dto';

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
  create(@Body() body: CreateAppointmentDto, @Request() req: RequestWithUser) {
    return this.service.create(req.user.id, body.barberId, new Date(body.date));
  }

  @UseGuards(JwtAuthGuard)
  @Get('available')
  getAvailable(
    @Query('date') date: string,
    @Query('barberId') barberId: string,
  ) {
    return this.service.getAvailableSlots(new Date(date), barberId);
  }
  findAll() {
    return this.service.findAll();
  }
}
