import { IsString, IsNumber, IsInt, IsOptional, IsUUID } from 'class-validator';
import { RatingId } from '../database/entities/rating.entity';
import { BookId } from '../database/entities/books.entity';

export class CreateRatingDto {
  @IsInt()
  stars: number;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsUUID()
  @IsOptional()
  bookId: BookId;
}

export class UpdateRatingDto {
  @IsInt()
  @IsOptional()
  stars: number;

  @IsString()
  @IsOptional()
  comment?: string;
  
  @IsUUID()
  @IsOptional()
  bookId: BookId;
}