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

  async getAvailableSlots(date: Date, barberId: string) {
    const startHour = 9;
    const endHour = 18;

    const slots: string[] = [];

    for (let hour = startHour; hour < endHour; hour++) {
      const h = hour.toString().padStart(2, '0');

      slots.push(`${h}:00`);
      slots.push(`${h}:30`);
    }

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    const appointments = await this.prisma.appointment.findMany({
      where: {
        barberId,
        date: {
          gte: startOfDay,
          lte: endOfDay,
        },
      },
    });

    const bookedSlots = appointments.map((appt) => {
      const hour = appt.date.getHours().toString().padStart(2, '0');

      const minutes = appt.date.getMinutes().toString().padStart(2, '0');

      return `${hour}:${minutes}`;
    });

    const availableSlots = slots.filter((slot) => !bookedSlots.includes(slot));

    const now = new Date();

    const isToday = date.toDateString() === now.toDateString();

    if (!isToday) {
      return availableSlots;
    }

    const currentHour = now.getHours();

    const currentMinutes = now.getMinutes();

    return availableSlots.filter((slot) => {
      const [hour, minutes] = slot.split(':').map(Number);

      if (hour > currentHour) return true;

      if (hour === currentHour && minutes > currentMinutes) return true;

      return false;
    });
  }
}
