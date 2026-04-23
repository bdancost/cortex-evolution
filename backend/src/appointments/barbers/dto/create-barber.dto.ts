import { IsString, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateBarberDto {
  @Transform(({ value }) => (typeof value === 'string' ? value.trim() : value))
  @IsString()
  @IsNotEmpty()
  name!: string;
}
