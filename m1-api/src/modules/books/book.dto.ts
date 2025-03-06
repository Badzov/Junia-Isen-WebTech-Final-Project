import { IsString, IsNumber, IsInt } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  publishedYear: number;

  @IsNumber()
  rating: number;
}
