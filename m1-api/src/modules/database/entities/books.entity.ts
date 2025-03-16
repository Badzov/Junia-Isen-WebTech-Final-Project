import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { AuthorEntity, AuthorId } from './author.entity';

export type BookId = string & { __brand: 'Book' };

@Entity('books')
export class BookEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: BookId;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'publishedYear', type: 'int' })
  publishedYear: number;

  @Column({ name: 'averageRating', type: 'float' })
  averageRating: number;

  @Column({ name: 'authorId', type: 'uuid' })
  authorId: AuthorId;

  @ManyToOne(() => AuthorEntity, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'authorId' })
  author: AuthorEntity;
}
