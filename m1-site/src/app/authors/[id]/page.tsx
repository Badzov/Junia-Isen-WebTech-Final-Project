"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuthors } from "../../../hooks/useAuthors";
import { useBooks } from "../../../hooks/useBooks"; // Import useBooks
import Link from "next/link";
import { PageTitle } from "../../../components/PageTitle";
import DeleteAuthorModal from "../../../components/modals/DeleteAuthorModal";
import { AuthorBooksList } from "../../../components/AuthorBooksList"; // Import AuthorBooksList

export default function AuthorDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    author,
    loading: authorLoading,
    error: authorError,
    fetchAuthorById,
    deleteAuthor,
  } = useAuthors();

  const { books, fetchBooksByAuthorId } = useBooks();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchAuthorById(id);
      fetchBooksByAuthorId(id);
    }
  }, [id, fetchAuthorById, fetchBooksByAuthorId]);

  // Handle deleting the author
  const handleDelete = () => {
    if (id) {
      deleteAuthor(id).then(() => {
        setIsDeleteModalOpen(false); // Close the modal after deletion
      });
    }
  };

  if (authorLoading) {
    return (
      <p className="text-center text-gray-600">Loading author details...</p>
    );
  }

  if (authorError) {
    return <p className="text-center text-red-600">Error: {authorError}</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <PageTitle title={author?.name || "Author Details"} />
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-700">
              <strong>Biography:</strong>{" "}
              {author?.biography || "No biography available."}
            </p>
            <p className="text-gray-700">
              <strong>Number of books written:</strong>{" "}
              {author?.numberOfBooksWritten || "0"}
            </p>
            <p className="text-gray-700">
              <strong>Average Rating:</strong>{" "}
              {author?.averageRating === 0
                ? "NaN"
                : `${author?.averageRating}/5`}
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={author?.photoURL || "/placeholder-author.jpg"}
              alt={author?.name}
              className="w-48 h-48 object-cover rounded-full shadow-md"
            />
          </div>
        </div>
        {/* List of books written by the author */}
        <AuthorBooksList books={books} />
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/authors">
              <button className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all transform hover:scale-105">
                Go back
              </button>
            </Link>
          </div>
          {/* Delete button on the far right */}
          <button
            onClick={() => setIsDeleteModalOpen(true)}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg hover:from-red-600 hover:to-red-700 transition-all transform hover:scale-105"
          >
            Delete Author
          </button>
        </div>
      </div>

      {/* Delete Author Modal */}
      <DeleteAuthorModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
