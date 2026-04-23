import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: { user: true };
}>;

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  // ✅ Método privado da classe (padrão correto)
  private roundToNearest30(date: Date): Date {
    const minutes = date.getMinutes();
    const roundedMinutes = minutes < 30 ? 0 : 30;

    date.setMinutes(roundedMinutes);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
  }

  async create(userId: string, barberId: string, date: Date) {
    // ✅ aplica regra de negócio antes de tudo
    const roundedDate = this.roundToNearest30(date);

    // ✅ validação de conflito
    const existingAppointment = await this.prisma.appointment.findFirst({
      where: {
        date: roundedDate,
      },
    });

    if (existingAppointment) {
      throw new BadRequestException('This time slot is already booked');
    }

    try {
      return await this.prisma.appointment.create({
        data: {
          userId,
          barberId,
          date: roundedDate,
        },
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
