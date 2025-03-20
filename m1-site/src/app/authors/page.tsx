"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { AuthorModel } from "../models/AuthorModel";
import CreateAuthorModal from "../components/modals/CreateAuthorModal";
import DeleteAuthorModal from "../components/modals/DeleteAuthorModal";
import Link from "next/link";

export default function ListAuthors() {
  const [authors, setAuthors] = useState<AuthorModel[]>([]);
  const [isCreateAuthorModalOpen, setIsCreateAuthorModalOpen] = useState(false);
  const [isDeleteAuthorModalOpen, setIsDeleteAuthorModalOpen] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);

  // Load authors from the backend
  const loadAuthors = (search?: string, sortOrder: "ASC" | "DESC" = "ASC") => {
    const params = {
      search,
      sortBy: "name", // You can make this dynamic if needed
      sortOrder,
    };

    axios
      .get("http://localhost:3001/api/authors", { params })
      .then((response) => {
        setAuthors(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Load authors when the component mounts
  useEffect(() => {
    loadAuthors();
  }, []);

  // Open the create author modal
  const openCreateAuthorModal = () => {
    setIsCreateAuthorModalOpen(true);
  };

  // Save a new author and reload the authors from the backend
  const handleCreateAuthor = (newAuthor: {
    name: string;
    biography: string;
    photoURL: string;
  }) => {
    axios
      .post("http://localhost:3001/api/authors", newAuthor)
      .then(() => {
        loadAuthors(); // Reload authors after creation
        setIsCreateAuthorModalOpen(false); // Close the modal
      })
      .catch((error) => {
        console.error("Failed to create author:", error);
        alert("Failed to create author. Please try again.");
      });
  };

  // Delete an author and reload the authors from the backend
  const handleDeleteAuthor = (id: string) => {
    axios
      .delete(`http://localhost:3001/api/authors/${id}`)
      .then(() => {
        loadAuthors(); // Reload authors from the backend
        setIsDeleteAuthorModalOpen(false); // Close the delete confirmation modal
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <p>List of Authors</p>
      <div>
        <input
          type="text"
          placeholder="Filter authors..."
          onChange={(e) => loadAuthors(e.target.value)} // Filter authors as the user types
        />
        <button onClick={openCreateAuthorModal} style={{ marginLeft: "20px" }}>
          Create Author
        </button>
        <button
          onClick={() => loadAuthors(undefined, "ASC")}
          style={{ marginLeft: "20px" }}
        >
          Sort Ascending
        </button>
        <button
          onClick={() => loadAuthors(undefined, "DESC")}
          style={{ marginLeft: "20px" }}
        >
          Sort Descending
        </button>
        {isCreateAuthorModalOpen && (
          <CreateAuthorModal
            isOpen={isCreateAuthorModalOpen}
            onClose={() => setIsCreateAuthorModalOpen(false)}
            onSave={handleCreateAuthor}
          />
        )}
        <table>
          <thead>
            <tr>
              <th style={{ padding: "0 30px" }}>Author's Name</th>
              <th style={{ padding: "0 30px" }}>Number of Books</th>
              <th style={{ padding: "0 30px" }}>Picture</th>
              <th style={{ padding: "0 30px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((author) => (
              <tr key={author.id}>
                <td style={{ padding: "0 30px" }}>{author.name}</td>
                <td style={{ padding: "0 30px" }}>
                  {author.numberOfBooksWritten}
                </td>
                <td style={{ padding: "0 30px" }}>
                  <img
                    src={author.photoURL}
                    alt={"No Image"}
                    width="140"
                    height="100"
                  />
                </td>
                <td style={{ padding: "0 30px" }}>
                  <Link href={`/authors/${author.id}`}>
                    <button style={{ marginRight: "10px" }}>Details</button>
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedAuthorId(author.id);
                      setIsDeleteAuthorModalOpen(true);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isDeleteAuthorModalOpen && (
          <DeleteAuthorModal
            isOpen={isDeleteAuthorModalOpen}
            onClose={() => setIsDeleteAuthorModalOpen(false)}
            onDelete={() => handleDeleteAuthor(selectedAuthorId!)}
          />
        )}
      </div>
    </div>
  );
}
