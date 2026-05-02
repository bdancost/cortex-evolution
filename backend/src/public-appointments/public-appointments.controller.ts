import { Controller, Post, Body } from '@nestjs/common';

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
}
