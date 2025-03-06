import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AuthorId } from './author.entity';

export type BookId = string & { __brand: 'Book' };

@Entity('books')
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: BookId;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'publishedYear', type: 'int' })
  publishedYear: number;

  @Column({ name: 'author', type: 'varchar' })
  authorName: string;

  @Column({ name: 'authorId', type: 'uuid' })
  authorId: AuthorId;
}
