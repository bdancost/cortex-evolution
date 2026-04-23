import { IsDateString, IsNotEmpty, IsUUID, MinDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  barberId!: string;

  @IsDateString()
  @IsNotEmpty()
  @Transform(({ value }) => new Date(value))
  @MinDate(new Date())
  date!: Date;
}
