"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useBooks } from "../../../hooks/useBooks";
import { useAuthors } from "../../../hooks/useAuthors";
import Link from "next/link";

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

  useEffect(() => {
    if (id) {
      fetchBookById(id).then((fetchedBook) => {
        // Using type assertion to bypass TypeScript's type checking
        const bookWithAuthorId = fetchedBook as any;
        if (bookWithAuthorId?.authorId) {
          fetchAuthorById(bookWithAuthorId.authorId);
        }
      });
    }
  }, [id, fetchBookById, fetchAuthorById]);

  if (bookLoading || authorLoading) {
    return <p>Loading book details...</p>;
  }

  if (bookError || authorError) {
    return <p style={{ color: "red" }}>{bookError || authorError}</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book?.title}</h1>
      <p>
        <strong>Author:</strong>{" "}
        {author ? (
          <Link href={`/authors/${author.id}`}>{author.name}</Link>
        ) : (
          "Unknown"
        )}
      </p>
      <p>
        <strong>Published Year:</strong> {book?.publishedYear}
      </p>
      <p>
        <strong>Price:</strong> ${book?.price}
      </p>
      <p>
        <strong>Rating:</strong> {book?.averageRating}/5
      </p>
      <div style={{ marginTop: "20px" }}>
        <Link href="/books">
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
