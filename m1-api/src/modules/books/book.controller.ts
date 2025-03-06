import { BookModel, CreateBookModel } from './book.model';
import { BookService } from './book.service';
import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(): Promise<BookModel[]> {
    return this.bookService.getBooks();
  }

  @Post()
  public async createBook(@Body() input: CreateBookModel): Promise<BookModel> {
    return this.bookService.createBook(input);
  }
}
