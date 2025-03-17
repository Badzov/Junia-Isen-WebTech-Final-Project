import { CreateBookDto, UpdateBookDto } from './book.dto';
import { BookModel, CreateBookModel } from './book.model';
import { BookService } from './book.service';
import { Controller } from '@nestjs/common';
import { Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks(): Promise<BookModel[]> {
    return this.bookService.getBooks();
  }

  @Get(':id')
  public async getBook(@Param('id') id: string): Promise<BookModel> {
    return this.bookService.getBook(id);
  }

  @Post()
  public async createBook(@Body() input: CreateBookDto): Promise<BookModel> {
    return this.bookService.createBook(input);
  }

  @Patch(':id')
  public async updateBook(@Param('id') id: string, @Body() input: UpdateBookDto,): Promise<BookModel> {
    return this.bookService.updateBook(id, input);
  }

  @Delete(':id')
  public async deleteBook(@Param('id') id: string): Promise<void> {
    return this.bookService.deleteBook(id);
  }
}
