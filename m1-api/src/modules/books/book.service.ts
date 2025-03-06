import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { BookModel, CreateBookModel } from './book.model';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async getBooks(): Promise<BookModel[]> {
    return this.bookRepository.getBooks();
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.createBook(input);
  }
}
