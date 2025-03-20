"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useAuthors } from "../../../hooks/useAuthors";
import Link from "next/link";
import { PageTitle } from "../../../components/PageTitle";

export default function AuthorDetails() {
  // Receive the id parameter from the URL
  const { id } = useParams<{ id: string }>();

  // Use the useAuthors hook to fetch author details
  const { author, loading, error, fetchAuthorById } = useAuthors();

  // Fetch author details when the id changes
  useEffect(() => {
    if (id) {
      fetchAuthorById(id);
    }
  }, [id, fetchAuthorById]);

  // Display a loading message while the author data is being fetched
  if (loading) {
    return (
      <p className="text-center text-gray-600">Loading author details...</p>
    );
  }

  // Display an error message if there's an error
  if (error) {
    return <p className="text-center text-red-600">Error: {error}</p>;
  }

  // Display the essential information about the selected author
  return (
    <div className="p-6">
      <PageTitle title={author?.name || "Author Details"} />{" "}
      {/* Add PageTitle here */}
      <p className="mb-2">
        <strong>Biography:</strong> {author?.biography}
      </p>
      <p className="mb-2">
        <strong>Books Written:</strong> {author?.numberOfBooksWritten}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {author?.averageRating}/5
      </p>
      <img
        src={author?.photoURL}
        alt={author?.name}
        className="w-64 h-48 object-cover mb-4"
      />
      <div className="mt-4">
        <Link href="/authors">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
