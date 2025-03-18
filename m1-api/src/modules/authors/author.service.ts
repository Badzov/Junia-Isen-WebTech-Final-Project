import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthorRepository } from './author.repository';
import { AuthorModel, CreateAuthorModel, UpdateAuthorModel } from './author.model';

// Its what serves the data to the repository

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async getAuthors(
    search?: string,
    sortBy?: string,
    sortOrder: 'ASC' | 'DESC' = 'ASC',
    limit?: number,
    offset?: number): Promise<AuthorModel[]> {
      
    return this.authorRepository.getAuthors(search, sortBy, sortOrder, limit, offset);
  }

  public async getAuthorById(id: string): Promise<AuthorModel> {
    const author = await this.authorRepository.getAuthorById(id);
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }

  public async updateAuthor(id: string, input: UpdateAuthorModel): Promise<AuthorModel> {
    const author = await this.authorRepository.updateAuthor(id, input);
    if (!author) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
    return author;
  }

  public async deleteAuthor(id: string): Promise<void> {
    const result = await this.authorRepository.deleteAuthor(id);
    if (!result) {
      throw new NotFoundException(`Author with ID ${id} not found`);
    }
  }
}
