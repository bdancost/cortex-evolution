import { Module } from '@nestjs/common';
import { BarbersController } from './barbers.controller';
import { BarbersService } from './barbers.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [BarbersController],
  providers: [BarbersService, PrismaService],
})
export class BarbersModule {}
