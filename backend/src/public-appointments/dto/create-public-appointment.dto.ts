import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class CreatePublicAppointmentDto {
  @IsString()
  @IsNotEmpty()
  guestName!: string;

  @IsString()
  @IsNotEmpty()
  guestPhone!: string;

  @IsString()
  @IsNotEmpty()
  barberId!: string;

  @IsDateString()
  date!: string;
}
