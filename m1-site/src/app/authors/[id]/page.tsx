"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { AuthorModel } from "../../models/AuthorModel"; // Import the AuthorModel type

export default function AuthorDetails() {
  // Receive the id parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Save author information, defaulting to null initially
  const [author, setAuthor] = useState<AuthorModel | null>(null);

  // Fetch author details when the id changes
  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:3001/api/authors/${id}`)
        .then((response) => {
          setAuthor(response.data); // Set the author data
        })
        .catch((error) => {
          console.error("Failed to fetch author details:", error);
        });
    }
  }, [id]);

  // Display a loading message while the author data is being fetched
  if (!author) {
    return <p>Loading author details...</p>;
  }

  // Display the essential information about the selected author
  return (
    <div style={{ padding: "20px" }}>
      <h1>{author.name}</h1>
      <p>
        <strong>Biography:</strong> {author.biography}
      </p>
      <p>
        <strong>Books Written:</strong> {author.numberOfBooksWritten}
      </p>
      <p>
        <strong>Rating:</strong> {author.averageRating}/5
      </p>
      <img src={author.photoURL} alt={author.name} width="250" height="200" />
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
