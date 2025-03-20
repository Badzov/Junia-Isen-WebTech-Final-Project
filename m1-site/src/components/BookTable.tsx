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
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Book's Title
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Author's Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Published Year
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id} className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-900">{book.title}</td>
            <td className="px-6 py-4 text-sm text-gray-900">
              {authors.find((author) => author.id === book.authorId)?.name ||
                "Unknown"}
            </td>
            <td className="px-6 py-4 text-sm text-gray-900">
              {book.publishedYear}
            </td>
            <td className="px-6 py-4 text-sm text-gray-900">
              <Link href={`/books/${book.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                  Details
                </button>
              </Link>
              <button
                onClick={() => onDelete(book.id)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
