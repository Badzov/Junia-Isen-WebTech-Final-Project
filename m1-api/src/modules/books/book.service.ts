import { Injectable, NotFoundException } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { BookModel, CreateBookModel, UpdateBookModel } from './book.model';
import { Throttle, SkipThrottle } from '@nestjs/throttler';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async getBooks(): Promise<BookModel[]> {
    return this.bookRepository.getBooks();
  }

  public async getBook(id: string): Promise<BookModel> {
    const book = await this.bookRepository.getBook(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.createBook(input);
  }

  public async updateBook(id: string, input: UpdateBookModel): Promise<BookModel> {
    const book = await this.bookRepository.getBook(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return this.bookRepository.updateBook(id, input);
  }

  public async deleteBook(id: string): Promise<void> {
    const book = await this.bookRepository.getBook(id);
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    await this.bookRepository.deleteBook(id);
  }
}
