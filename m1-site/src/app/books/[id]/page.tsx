"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useBooks } from "../../../hooks/useBooks";
import { useAuthors } from "../../../hooks/useAuthors";
import Link from "next/link";
import { Drawer } from "@mui/material";
import { PageTitle } from "../../../components/PageTitle";

export default function BookDetails() {
  const { id } = useParams<{ id: string }>();

  const {
    book,
    loading: bookLoading,
    error: bookError,
    fetchBookById,
  } = useBooks();

  const {
    author,
    loading: authorLoading,
    error: authorError,
    fetchAuthorById,
  } = useAuthors();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (id) {
      fetchBookById(id).then((fetchedBook) => {
        const bookWithAuthorId = fetchedBook as any;
        if (bookWithAuthorId?.authorId) {
          fetchAuthorById(bookWithAuthorId.authorId);
        }
      });
    }
  }, [id, fetchBookById, fetchAuthorById]);

  if (bookLoading || authorLoading) {
    return <p className="text-center text-gray-600">Loading book details...</p>;
  }

  if (bookError || authorError) {
    return (
      <p className="text-center text-red-600">{bookError || authorError}</p>
    );
  }

  return (
    <div className="p-6">
      <PageTitle title={book?.title || "Book Details"} />
      <p className="mb-2">
        <strong>Author:</strong>{" "}
        {author ? (
          <Link
            href={`/authors/${author.id}`}
            className="text-blue-600 hover:text-blue-800"
          >
            {author.name}
          </Link>
        ) : (
          "Unknown"
        )}
      </p>
      <p className="mb-2">
        <strong>Published Year:</strong> {book?.publishedYear}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> ${book?.price}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {book?.averageRating}/5
      </p>
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        View Ratings
      </button>
      <div className="mt-4">
        <Link href="/books">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            Go back
          </button>
        </Link>
      </div>

      {/* Drawer for Ratings */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="w-64 p-4">
          <h2 className="text-xl font-bold mb-4">Ratings</h2>
          {/* Add ratings list here */}
          <p>No ratings available.</p>
        </div>
      </Drawer>
    </div>
  );
}
