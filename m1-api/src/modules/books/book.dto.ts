import { IsString, IsNumber, IsInt, IsOptional, IsUUID } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  publishedYear: number;

  @IsNumber()
  @IsOptional()
  averageRating: number;

  @IsUUID()
  @IsOptional()
  authorId: string;
}
