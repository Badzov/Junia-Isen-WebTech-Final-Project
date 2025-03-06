import { AuthorModel } from '../authors/author.model';

export type BookModel = {
  author: AuthorModel;
  title: string;
  publishedYear: number;
  averageRating: number;
};

export type CreateBookModel = {
  title: string;
  publishedYear: number;
  rating: number;
};
