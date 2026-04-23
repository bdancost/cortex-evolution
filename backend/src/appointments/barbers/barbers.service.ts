import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BarbersService {
  constructor(private prisma: PrismaService) {}

  async create(name: string) {
    return this.prisma.barber.create({
      data: { name },
    });
  }

  async findAll() {
    return this.prisma.barber.findMany();
  }
}
