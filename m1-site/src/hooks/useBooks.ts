import { useState, useCallback } from "react";
import axios from "axios";
import { BookModel, CreateBookModel } from "../models/BookModel";

export const useBooks = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [book, setBook] = useState<BookModel | null>(null); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all books
  const fetchBooks = useCallback(async (search?: string, sortBy: string = "title", sortOrder: "ASC" | "DESC" = "ASC") => {
    setLoading(true);
    setError(null);
    try {
      const params = { search, sortBy, sortOrder };
      const response = await axios.get<BookModel[]>("http://localhost:3001/api/books", { params });
      setBooks(response.data);
    } catch (error) {
      setError("Failed to fetch books.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a single book by ID
  const fetchBookById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<BookModel>(`http://localhost:3001/api/books/${id}`);
      setBook(response.data);
      return response.data; 
    } catch (error) {
      setError("Failed to fetch book details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch books by author ID
  const fetchBooksByAuthorId = useCallback(async (authorId: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<BookModel[]>(`http://localhost:3001/api/books?authorId=${authorId}`);
      setBooks(response.data);
    } catch (error) {
      setError("Failed to fetch books by author.");
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new book
  const createBook = async (newBook: CreateBookModel) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<BookModel>("http://localhost:3001/api/books", newBook);
      setBooks((prevBooks) => [...prevBooks, response.data]);
    } catch (error) {
      setError("Failed to create book.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete a book
  const deleteBook = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3001/api/books/${id}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
    } catch (error) {
      setError("Failed to delete book.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { books, book, loading, error, fetchBooks, fetchBookById, fetchBooksByAuthorId, createBook, deleteBook };
};