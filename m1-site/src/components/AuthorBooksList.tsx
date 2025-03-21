import React from "react";
import Link from "next/link";
import { BookModel } from "../models/BookModel";

interface AuthorBooksListProps {
  books: BookModel[];
}

export const AuthorBooksList: React.FC<AuthorBooksListProps> = ({ books }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Books Written</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/books/${book.id}`}
            className="bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-200 border border-gray-200 hover:border-gray-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h3>
              <p className="text-gray-600">
                <strong>Published Year:</strong> {book.publishedYear}
              </p>
              <p className="text-gray-600">
                <strong>Average Rating:</strong>{" "}
                {book.averageRating === 0 ? "NaN" : `${book.averageRating}/5`}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
