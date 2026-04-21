import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: { user: true };
}>;

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  create(userId: string, date: Date) {
    return this.prisma.appointment.create({
      data: {
        userId,
        date,
      },
    });
  }

  findAll(): Promise<AppointmentWithUser[]> {
    return this.prisma.appointment.findMany({
      include: {
        user: true,
      },
    });
  }
}
