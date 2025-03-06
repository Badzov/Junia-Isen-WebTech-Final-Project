import { AuthorId } from '../database/entities/author.entity';

// This is just the business model

export type AuthorModel = {
  id: AuthorId;
  name: string;
  numberOfBooksWritten: number;
  averageRating: number;
  photoURL: string;
};

// This is the class for when a new author is created
export type CreateAuthorModel = {
  name: string;
  photoURL?: string;
  numberOfBooksWritten?: number;
  averageRating?: number;
};
