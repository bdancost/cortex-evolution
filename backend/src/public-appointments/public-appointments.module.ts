import { Module } from '@nestjs/common';

import { PublicAppointmentsController } from './public-appointments.controller';
import { PublicAppointmentsService } from './public-appointments.service';

import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PublicAppointmentsController],
  providers: [PublicAppointmentsService, PrismaService],
})
export class PublicAppointmentsModule {}
