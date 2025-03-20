"use client";
import React, { useEffect, useState } from "react";
import { useBooks } from "../../hooks/useBooks";
import { useAuthors } from "../../hooks/useAuthors";
import CreateBookModal from "../../components/modals/CreateBookModal";
import DeleteBookModal from "../../components/modals/DeleteBookModal";
import { BookTable } from "../../components/BookTable";
import { CreateBookModel } from "../../models/BookModel";
import { PageTitle } from "../../components/PageTitle";

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
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (booksError || authorsError) {
    return (
      <p className="text-center text-red-600">
        Error: {booksError || authorsError}
      </p>
    );
  }

  return (
    <div className="p-6">
      <PageTitle title="List of Books" />
      <div className="mb-4">
        <button
          onClick={() => setIsCreateBookModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Book
        </button>
      </div>
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
  );
}
