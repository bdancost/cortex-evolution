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

  async create(userId: string, date: Date) {
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
}
