"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { BookModel } from "../../models/BookModel";
import { AuthorModel } from "../../models/AuthorModel";

export default function BookDetails() {
  // Get the book ID from the URL
  const { id } = useParams<{ id: string }>();

  // State for book and author details
  const [book, setBook] = useState<BookModel | null>(null);
  const [author, setAuthor] = useState<AuthorModel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch book and author details when the component mounts
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/api/books/${id}`)
        .then((response) => {
          setBook(response.data); // Set the book data
          // Fetch the author details using the authorId from the book
          axios
            .get(`http://localhost:3001/api/authors/${response.data.authorId}`)
            .then((authorResponse) => {
              setAuthor(authorResponse.data); // Set the author data
            })
            .catch((authorError) => {
              console.error("Failed to fetch author details:", authorError);
              setAuthor(null); // Set author to null if fetching fails
            });
        })
        .catch((error) => {
          console.error("Failed to fetch book details:", error);
          setError("Failed to load book details. Please try again later.");
        })
        .finally(() => {
          setLoading(false); // Set loading to false after the request completes
        });
    }
  }, [id]);

  // Display a loading message while the data is being fetched
  if (loading) {
    return <p>Loading book details...</p>;
  }

  // Display an error message if the request fails
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // Display the book details
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
