import { Injectable, BadRequestException } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PublicAppointmentsService {
  constructor(private prisma: PrismaService) {}

  private roundToNearest30(date: Date): Date {
    const minutes = date.getMinutes();
    const roundedMinutes = minutes < 30 ? 0 : 30;

    date.setMinutes(roundedMinutes);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
  }

  async create(
    guestName: string,
    guestPhone: string,
    barberId: string,
    date: Date,
  ) {
    const roundedDate = this.roundToNearest30(date);

    if (roundedDate < new Date()) {
      throw new BadRequestException('Cannot create appointment in the past');
    }

    const exists = await this.prisma.appointment.findFirst({
      where: {
        barberId,
        date: roundedDate,
      },
    });

    if (exists) {
      throw new BadRequestException('This slot is already booked');
    }

    return this.prisma.appointment.create({
      data: {
        barberId,
        date: roundedDate,
        guestName,
        guestPhone,
      },
    });
  }
}
