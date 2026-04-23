import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { BarbersModule } from './appointments/barbers/barbers.module';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    AppointmentsModule,
    BarbersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
