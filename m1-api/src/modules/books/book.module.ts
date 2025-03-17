import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';
import { RatingController } from '../ratings/rating.controller';
import { RatingRepository } from '../ratings/rating.repository';
import { RatingService } from '../ratings/rating.service';

@Module({
  controllers: [BookController],
  providers: [BookRepository, BookService],
  exports: [BookRepository],
})
export class BookModule {}
