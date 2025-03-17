import { Injectable } from '@nestjs/common';
import { BookEntity, BookId } from '../database/entities/books.entity';
import { DataSource } from 'typeorm';
import { BookModel, CreateBookModel, UpdateBookModel } from '../books/book.model';

@Injectable()
export class BookRepository {
  private readonly bookRepository = this.dataSource.getRepository(BookEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async getBooks(): Promise<BookModel[]> {
    return this.bookRepository.find();
  }

  public async getBook(id: string): Promise<BookModel> {
    return this.bookRepository.findOne({ where: { id: id as BookId } });
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.save(this.bookRepository.create(input));
  }

  public async updateBook(id: string, input: UpdateBookModel): Promise<BookModel> {
    await this.bookRepository.update(id, input);
    return this.getBook(id);
  }

  public async deleteBook(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
