import { IsString, IsNumber, IsOptional } from 'class-validator';

// Here we make sure we only obtain the desired data
export class CreateAuthorDto {
  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  numberOfBooksWritten?: number;

  @IsNumber()
  @IsOptional()
  averageRating?: number;

  @IsString()
  @IsOptional()
  photoURL?: string;
}
