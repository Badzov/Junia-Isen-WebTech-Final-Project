import { Injectable } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorModel, CreateAuthorModel } from './author.model';

// Its what serves the data to the repository
@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async getAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.getAuthors();
  }

  public async createAuthor(input: CreateAuthorModel) {
    return this.authorRepository.createAuthor(input);
  }
}
