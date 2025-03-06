import { Injectable } from '@nestjs/common';
import { BookEntity } from '../database/entities/books.entity';
import { DataSource } from 'typeorm';
import { BookModel, CreateBookModel } from '../books/book.model';

@Injectable()
export class BookRepository {
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async getBooks(): Promise<BookModel[]> {
    return this.bookRepository.find();
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.save(this.bookRepository.create(input));
  }
}
