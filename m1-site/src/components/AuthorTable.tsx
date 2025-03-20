import React from "react";
import { AuthorModel } from "../models/AuthorModel";
import Link from "next/link";

interface AuthorTableProps {
  authors: AuthorModel[];
  onDelete: (id: string) => void;
}

export const AuthorTable: React.FC<AuthorTableProps> = ({
  authors,
  onDelete,
}) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Author's Name
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Number of Books
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Picture
          </th>
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {authors.map((author) => (
          <tr key={author.id} className="border-b border-gray-200">
            <td className="px-6 py-4 text-sm text-gray-900">{author.name}</td>
            <td className="px-6 py-4 text-sm text-gray-900">
              {author.numberOfBooksWritten}
            </td>
            <td className="px-6 py-4">
              <img
                src={author.photoURL}
                alt={"No Image"}
                className="w-24 h-16 object-cover"
              />
            </td>
            <td className="px-6 py-4 text-sm text-gray-900">
              <Link href={`/authors/${author.id}`}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">
                  Details
                </button>
              </Link>
              <button
                onClick={() => onDelete(author.id)}
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
