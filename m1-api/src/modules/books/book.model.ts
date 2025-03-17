import { AuthorModel } from '../authors/author.model';
import { AuthorId } from '../database/entities/author.entity';

export type BookModel = {
  author: AuthorModel;
  title: string;
  publishedYear: number;
  averageRating: number;
  authorId: AuthorId;
};

export type CreateBookModel = {
  title: string;
  publishedYear: number;
  averageRating?: number;
  authorId?: string;
};

export type UpdateBookModel = {
  title?: string;
  publishedYear?: number;
  averageRating?: number;
  authorId?: AuthorId;
};
