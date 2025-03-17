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

// Same goes here, any part of the author can be updated thats why everything is optional

export class UpdateAuthorDto {
  @IsString()
  @IsOptional()
  name?: string;

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
