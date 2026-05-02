import { Controller, Post, Body, Get, Query } from '@nestjs/common';

import { PublicAppointmentsService } from './public-appointments.service';

import { CreatePublicAppointmentDto } from './dto/create-public-appointment.dto';

@Controller('public/appointments')
export class PublicAppointmentsController {
  constructor(private service: PublicAppointmentsService) {}

  @Post()
  create(
    @Body()
    body: CreatePublicAppointmentDto,
  ) {
    return this.service.create(
      body.guestName,
      body.guestPhone,
      body.barberId,
      new Date(body.date),
    );
  }
  @Get('available')
  getAvailable(
    @Query('date') date: string,
    @Query('barberId') barberId: string,
  ) {
    return this.service.getAvailableSlots(new Date(date), barberId);
  }
}
