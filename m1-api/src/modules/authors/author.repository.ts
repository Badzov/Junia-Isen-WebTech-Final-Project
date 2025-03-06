import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AuthorEntity } from '../database/entities/author.entity';
import { AuthorModel, CreateAuthorModel } from './author.model';

// Repository talks to the database

@Injectable()
export class AuthorRepository {
  private readonly authorRepository =
    this.dataSource.getRepository(AuthorEntity);

  constructor(private readonly dataSource: DataSource) {}

  public async getAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async createAuthor(input: CreateAuthorModel) {
    return this.authorRepository.save<AuthorEntity>(
      this.authorRepository.create(input),
    );
  }
}
