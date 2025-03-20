"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BookModel, CreateBookModel } from "../models/BookModel";
import { AuthorModel } from "../models/AuthorModel";
import CreateBookModal from "../components/modals/CreateBookModal";
import DeleteBookModal from "../components/modals/DeleteBookModal";
import Link from "next/link";

export default function BookList() {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [isCreateBookModalOpen, setIsCreateBookModalOpen] = useState(false);
  const [isDeleteBookModalOpen, setIsDeleteBookModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  // Load books and authors from the backend
  const loadBooks = () => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const loadAuthors = () => {
    axios
      .get("http://localhost:3001/api/authors")
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    loadBooks();
    loadAuthors();
  }, []);

  // Handle creating a new book
  const handleCreateBook = (newBook: CreateBookModel) => {
    axios
      .post("http://localhost:3001/api/books", newBook)
      .then((response) => {
        console.log("Book created successfully:", response.data);
        loadBooks(); // Reload books after creation
      })
      .catch((error) => {
        console.error("Failed to create book:", error);
      });
  };

  // Handle deleting a book
  const handleDeleteBook = (id: string) => {
    axios
      .delete(`http://localhost:3001/api/books/${id}`)
      .then(() => {
        loadBooks(); // Reload books after deletion
        setIsDeleteBookModalOpen(false); // Close the modal
      })
      .catch((error) => {
        console.error("Failed to delete book:", error);
      });
  };

  return (
    <div>
      <p>List of Books</p>
      <div>
        <button onClick={() => setIsCreateBookModalOpen(true)}>
          Create Book
        </button>
        {isCreateBookModalOpen && (
          <CreateBookModal
            isOpen={isCreateBookModalOpen}
            onClose={() => setIsCreateBookModalOpen(false)}
            onSave={handleCreateBook}
            authors={authors}
          />
        )}
        <table>
          <thead>
            <tr>
              <th>Book's Title</th>
              <th>Author's Name</th>
              <th>Published Year</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>
                  {authors.find((author) => author.id === book.authorId)
                    ?.name || "Unknown"}
                </td>
                <td>{book.publishedYear}</td>
                <td>
                  <Link href={`/books/${book.id}`}>
                    <button>Details</button>
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedBookId(book.id);
                      setIsDeleteBookModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDeleteBookModalOpen && (
          <DeleteBookModal
            isOpen={isDeleteBookModalOpen}
            onClose={() => setIsDeleteBookModalOpen(false)}
            onDelete={() => handleDeleteBook(selectedBookId!)}
          />
        )}
      </div>
    </div>
  );
}
