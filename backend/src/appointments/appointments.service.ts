import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

type AppointmentWithUser = Prisma.AppointmentGetPayload<{
  include: { user: true };
}>;

@Injectable()
export class AppointmentsService {
  private readonly START_HOUR = 9;
  private readonly END_HOUR = 18;

  constructor(private readonly prisma: PrismaService) {}

  // ========================
  // Helpers
  // ========================

  private roundToNearest30(date: Date): Date {
    const minutes = date.getMinutes();
    const roundedMinutes = minutes < 30 ? 0 : 30;

    date.setMinutes(roundedMinutes, 0, 0);
    return date;
  }

  private formatHour(hour: number): string {
    return hour.toString().padStart(2, '0');
  }

  private generateSlots(): string[] {
    const slots: string[] = [];

    for (let hour = this.START_HOUR; hour < this.END_HOUR; hour++) {
      const h = this.formatHour(hour);
      slots.push(`${h}:00`, `${h}:30`);
    }

    return slots;
  }

  private getDayRange(date: Date) {
    const start = new Date(date);
    start.setHours(0, 0, 0, 0);

    const end = new Date(date);
    end.setHours(23, 59, 59, 999);

    return { start, end };
  }

  private formatDateToSlot(date: Date): string {
    const hour = this.formatHour(date.getHours());
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minutes}`;
  }

  private filterPastSlots(slots: string[]): string[] {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();

    return slots.filter((slot) => {
      const [hour, minutes] = slot.split(':').map(Number);

      if (hour > currentHour) return true;
      if (hour === currentHour && minutes > currentMinutes) return true;

      return false;
    });
  }

  // ========================
  // Core methods
  // ========================

  async create(userId: string, date: Date) {
    const roundedDate = this.roundToNearest30(date);

    const existingAppointment = await this.prisma.appointment.findFirst({
      where: { date: roundedDate },
    });

    if (existingAppointment) {
      throw new BadRequestException('This time slot is already booked');
    }

    try {
      return await this.prisma.appointment.create({
        data: { userId, date: roundedDate },
      });
    } catch (error) {
      console.error(error);
      throw new BadRequestException('This time slot is already booked');
    }
  }

  findAll(): Promise<AppointmentWithUser[]> {
    return this.prisma.appointment.findMany({
      include: { user: true },
    });
  }

  async getAvailableSlots(date: Date) {
    const slots = this.generateSlots();

    const { start, end } = this.getDayRange(date);

    const appointments = await this.prisma.appointment.findMany({
      where: {
        date: {
          gte: start,
          lte: end,
        },
      },
    });

    const bookedSlots = appointments.map((appt) =>
      this.formatDateToSlot(appt.date),
    );

    const availableSlots = slots.filter((slot) => !bookedSlots.includes(slot));

    const isToday = date.toDateString() === new Date().toDateString();

    if (!isToday) {
      return availableSlots;
    }

    return this.filterPastSlots(availableSlots);
  }
}
