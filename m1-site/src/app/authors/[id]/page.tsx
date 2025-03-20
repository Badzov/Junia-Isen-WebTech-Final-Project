"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAuthors } from "../../hooks/useAuthors";
import Link from "next/link";

export default function AuthorDetails() {
  // Receive the id parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Use the useAuthors hook to fetch author details
  const { author, loading, error, fetchAuthorById } = useAuthors();

  // Fetch author details when the id changes
  useEffect(() => {
    if (id) {
      fetchAuthorById(id); // Fetch the author by ID
    }
  }, [id, fetchAuthorById]);

  // Display a loading message while the author data is being fetched
  if (loading) {
    return <p>Loading author details...</p>;
  }

  // Display an error message if there's an error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display the essential information about the selected author
  return (
    <div style={{ padding: "20px" }}>
      <h1>{author?.name}</h1>
      <p>
        <strong>Biography:</strong> {author?.biography}
      </p>
      <p>
        <strong>Books Written:</strong> {author?.numberOfBooksWritten}
      </p>
      <p>
        <strong>Rating:</strong> {author?.averageRating}/5
      </p>
      <img src={author?.photoURL} alt={author?.name} width="250" height="200" />
      <div style={{ marginTop: "20px" }}>
        <Link href="/authors">
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
