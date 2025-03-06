import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

export type AuthorId = string & { __brand: 'Author' };

@Entity('authors')
export class AuthorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: AuthorId;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'numberOfBooksWritten', type: 'int' })
  numberOfBooksWritten: number;

  @Column({ name: 'averageRating', type: 'float' })
  averageRating: number;

  @Column({ name: 'photoURL', type: 'varchar' })
  photoURL: string;
}
