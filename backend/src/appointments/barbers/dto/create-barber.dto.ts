import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBarberDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
}
