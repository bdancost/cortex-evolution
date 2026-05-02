/*
import {
  IsNotEmpty,
  IsUUID,
  MinDate,
  IsDate,
  IsDateString,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateAppointmentDto {
  @IsUUID()
  @IsNotEmpty()
  barberId!: string;

  @IsDateString()
  @IsNotEmpty()
  @Transform(({ value }) =>
    typeof value === 'string' || value instanceof Date
      ? new Date(value)
      : value,
  )
  @IsDate()
  @MinDate(new Date())
  date!: Date;
}
*/
