import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingModel, CreateRatingModel, UpdateRatingModel } from './rating.model';
import { BookId } from '../database/entities/books.entity';
import { CreateRatingDto, UpdateRatingDto } from './rating.dto';

@Controller('books/:bookId/ratings')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Get()
  public async getRatings(@Param('bookId') bookId: string): Promise<RatingModel[]> {
    return this.ratingService.getRatings(bookId);
  }

  @Get(':id')
  public async getRatingById(@Param('bookId') bookId: string, @Param('id') id: string,): Promise<RatingModel> {
    return this.ratingService.getRatingById(id);
  }

  @Post()
  public async addRating(@Param('bookId') bookId: string, @Body() input: CreateRatingDto): Promise<RatingModel> {
    input.bookId = bookId as BookId;
    return this.ratingService.addRating(input);
  }

  @Patch(':id')
  public async updateRating(@Param('bookId') bookId: string, @Param('id') id: string, @Body() input: UpdateRatingDto): Promise<RatingModel> {
    return this.ratingService.updateRating(id, input);
  }

  @Delete(':id')
  public async deleteRating(@Param('bookId') bookId: string, @Param('id') id: string,): Promise<void> {
    return this.ratingService.deleteRating(id);
  }
}