import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { BadRequestException } from '@nestjs/common';

type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: { user: true };
}>;

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, date: Date) {
    const existingAppointment = await this.prisma.appointment.findFirst({
      where: {
        date,
      },
    });

    if (existingAppointment) {
      throw new BadRequestException('This time slot is already booked');
    }

    try {
      return await this.prisma.appointment.create({
        data: { userId, date },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('This time slot is already booked');
    }
  }

  findAll(): Promise<AppointmentWithUser[]> {
    return this.prisma.appointment.findMany({
      include: {
        user: true,
      },
    });
  }
}
