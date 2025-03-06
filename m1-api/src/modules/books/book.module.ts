import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BookController],
  providers: [BookRepository, BookService],
})
export class BookModule {}
