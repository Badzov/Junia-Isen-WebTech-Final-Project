import { useCallback, useState } from "react";
import axios from "axios";
import { AuthorModel, CreateAuthorModel } from "../models/AuthorModel";

export const useAuthors = () => {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [author, setAuthor] = useState<AuthorModel | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all authors with optional query parameters
  const fetchAuthors = useCallback(async (search?: string, sortBy: string = "name", sortOrder: "ASC" | "DESC" = "ASC") => {
    setLoading(true);
    setError(null);
    try {
      const params = { search, sortBy, sortOrder };
      const response = await axios.get("http://localhost:3001/api/authors", { params });
      setAuthors(response.data);
    } catch (error) {
      setError("Failed to fetch authors.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch a single author by ID
  const fetchAuthorById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`http://localhost:3001/api/authors/${id}`);
      setAuthor(response.data);
      return response.data;
    } catch (error) {
      setError("Failed to fetch author details.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Create a new author
  const createAuthor = async (newAuthor: CreateAuthorModel) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://localhost:3001/api/authors", newAuthor);
      setAuthors((prevAuthors) => [...prevAuthors, response.data]);
    } catch (error) {
      setError("Failed to create author.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Delete an author
  const deleteAuthor = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`http://localhost:3001/api/authors/${id}`);
      setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== id));
    } catch (error) {
      setError("Failed to delete author.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Return all necessary values and functions
  return {
    authors,
    author, 
    loading,
    error,
    fetchAuthors,
    fetchAuthorById, 
    createAuthor,
    deleteAuthor,
  };
};