import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @MaxLength(40)
  @IsNotEmpty()
  name: string = '';

  @IsInt()
  @Min(1)
  price: number = 0;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  description?: string;
}
