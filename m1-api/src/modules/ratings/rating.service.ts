import { Injectable, NotFoundException } from '@nestjs/common';
import { RatingRepository } from './rating.repository';
import { CreateRatingModel, RatingModel, UpdateRatingModel } from './rating.model';
import { BookRepository } from '../books/book.repository';

@Injectable()
export class RatingService {
  constructor(
    private readonly ratingRepository: RatingRepository,
    private readonly bookRepository: BookRepository
  ) {}

  public async getRatings(bookId: string): Promise<RatingModel[]> {
    // Validate that the book exists
    const book = await this.bookRepository.getBook(bookId);
    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    return this.ratingRepository.getRatings(bookId);
  }

  public async getRatingById(bookId: string, id: string): Promise<RatingModel> {
    // Validate that the book exists
    const book = await this.bookRepository.getBook(bookId);
    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    const rating = await this.ratingRepository.getRatingById(id);
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
    return rating;
  }

  public async addRating(input: CreateRatingModel): Promise<RatingModel> {
    // Validate that the book exists
    const book = await this.bookRepository.getBook(input.bookId);
    if (!book) {
      throw new NotFoundException(`Book with ID ${input.bookId} not found`);
    }
    
    return this.ratingRepository.addRating(input);
  }

  public async updateRating(bookId: string, id: string, input: UpdateRatingModel): Promise<RatingModel> {
    // Validate that the book exists 
    if (bookId) {
      const book = await this.bookRepository.getBook(bookId);
      if (!book) {
        throw new NotFoundException(`Book with ID ${bookId} not found`);
      }
    }

    // Validate that the rating exists
    const rating = await this.ratingRepository.getRatingById(id);
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }

    return this.ratingRepository.updateRating(id, input);
  }

  public async deleteRating(bookId:string, id: string): Promise<void> {
    // Validate that the book exists
    const book = await this.bookRepository.getBook(bookId);
    if (!book) {
      throw new NotFoundException(`Book with ID ${bookId} not found`);
    }

    const result = await this.ratingRepository.deleteRating(id);
    if (!result) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
  }
}