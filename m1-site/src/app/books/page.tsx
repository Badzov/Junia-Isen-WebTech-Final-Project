"use client";
import React, { useEffect, useState } from "react";
import { useBooks } from "../hooks/useBooks";
import { useAuthors } from "../hooks/useAuthors";
import CreateBookModal from "../components/modals/CreateBookModal";
import DeleteBookModal from "../components/modals/DeleteBookModal";
import { BookTable } from "../components/BookTable";
import { CreateBookModel } from "../models/BookModel";

export default function BookList() {
  const {
    books,
    loading: booksLoading,
    error: booksError,
    fetchBooks,
    createBook,
    deleteBook,
  } = useBooks();

  const {
    authors,
    loading: authorsLoading,
    error: authorsError,
    fetchAuthors,
  } = useAuthors();

  const [isCreateBookModalOpen, setIsCreateBookModalOpen] = useState(false);
  const [isDeleteBookModalOpen, setIsDeleteBookModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState<string | null>(null);

  // Load books and authors when the component mounts
  useEffect(() => {
    fetchBooks();
    fetchAuthors();
  }, [fetchBooks, fetchAuthors]);

  // Handle creating a new book
  const handleCreateBook = (newBook: CreateBookModel) => {
    createBook(newBook).then(() => {
      setIsCreateBookModalOpen(false);
    });
  };

  // Handle deleting a book
  const handleDeleteBook = (id: string) => {
    deleteBook(id).then(() => {
      setIsDeleteBookModalOpen(false);
    });
  };

  if (booksLoading || authorsLoading) {
    return <p>Loading...</p>;
  }

  if (booksError || authorsError) {
    return <p>Error: {booksError || authorsError}</p>;
  }

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
        <BookTable
          books={books}
          authors={authors}
          onDelete={(id) => {
            setSelectedBookId(id);
            setIsDeleteBookModalOpen(true);
          }}
        />
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
