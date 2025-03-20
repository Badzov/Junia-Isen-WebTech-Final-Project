import React from "react";
import { BookModel } from "../models/BookModel";
import { AuthorModel } from "../models/AuthorModel";
import Link from "next/link";

interface BookTableProps {
  books: BookModel[];
  authors: AuthorModel[];
  onDelete: (id: string) => void;
}

export const BookTable: React.FC<BookTableProps> = ({
  books,
  authors,
  onDelete,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Book's Title</th>
          <th>Author's Name</th>
          <th>Published Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>
              {authors.find((author) => author.id === book.authorId)?.name ||
                "Unknown"}
            </td>
            <td>{book.publishedYear}</td>
            <td>
              <Link href={`/books/${book.id}`}>
                <button>Details</button>
              </Link>
              <button onClick={() => onDelete(book.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
