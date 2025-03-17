import { Injectable, NotFoundException } from '@nestjs/common';
import { RatingRepository } from './rating.repository';
import { CreateRatingModel, RatingModel, UpdateRatingModel } from './rating.model';

@Injectable()
export class RatingService {
  constructor(private readonly ratingRepository: RatingRepository) {}

  public async getRatings(bookId: string): Promise<RatingModel[]> {
    return this.ratingRepository.getRatings(bookId);
  }

  public async getRatingById(id: string): Promise<RatingModel> {
    const rating = await this.ratingRepository.getRatingById(id);
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
    return rating;
  }

  public async addRating(input: CreateRatingModel): Promise<RatingModel> {
    return this.ratingRepository.addRating(input);
  }

  public async updateRating(id: string, input: UpdateRatingModel): Promise<RatingModel> {
    const rating = await this.ratingRepository.getRatingById(id);
    if (!rating) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
    return this.ratingRepository.updateRating(id, input);
  }

  public async deleteRating(id: string): Promise<void> {
    const result = await this.ratingRepository.deleteRating(id);
    if (!result) {
      throw new NotFoundException(`Rating with ID ${id} not found`);
    }
  }
}