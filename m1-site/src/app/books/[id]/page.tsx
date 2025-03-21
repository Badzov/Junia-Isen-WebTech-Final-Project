"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useBooks } from "../../../hooks/useBooks";
import { useAuthors } from "../../../hooks/useAuthors";
import Link from "next/link";
import { Drawer } from "@mui/material";
import { PageTitle } from "../../../components/PageTitle";
import DeleteBookModal from "../../../components/modals/DeleteBookModal"; // Import DeleteBookModal

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    book,
    loading: bookLoading,
    error: bookError,
    fetchBookById,
    deleteBook,
  } = useBooks();

  const {
    author,
    loading: authorLoading,
    error: authorError,
    fetchAuthorById,
  } = useAuthors();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for delete modal

  useEffect(() => {
    if (id) {
      fetchBookById(id).then((fetchedBook) => {
        if (fetchedBook?.authorId) {
          fetchAuthorById(fetchedBook.authorId);
        }
      });
    }
  }, [id, fetchBookById, fetchAuthorById]);

  // Handle deleting the book
  const handleDelete = () => {
    if (id) {
      deleteBook(id).then(() => {
        setIsDeleteModalOpen(false); // Close the modal after deletion
      });
    }
  };

  if (bookLoading || authorLoading) {
    return <p className="text-center text-gray-600">Loading book details...</p>;
  }

  if (bookError || authorError) {
    return (
      <p className="text-center text-red-600">{bookError || authorError}</p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <PageTitle title={book?.title || "Book Details"} />
      <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
        <div className="space-y-6">
          <p className="text-gray-700">
            <strong>Author:</strong>{" "}
            {author ? (
              <Link
                href={`/authors/${author.id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {author.name}
              </Link>
            ) : (
              "Unknown"
            )}
          </p>
          <p className="text-gray-700">
            <strong>Published Year:</strong> {book?.publishedYear || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Price:</strong> ${book?.price || "N/A"}
          </p>
          <p className="text-gray-700">
            <strong>Rating:</strong>{" "}
            {book?.averageRating === 0 ? "NaN" : `${book?.averageRating}/5`}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105"
            >
              View Ratings
            </button>
            <Link href="/books">
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
            Delete Book
          </button>
        </div>
      </div>

      {/* Drawer for Ratings */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-96 p-6">
          <h2 className="text-xl font-bold mb-4">Ratings</h2>
          {/* Add ratings list here */}
          <p>No ratings available.</p>
        </div>
      </Drawer>

      {/* Delete Book Modal */}
      <DeleteBookModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
    </div>
  );
}
