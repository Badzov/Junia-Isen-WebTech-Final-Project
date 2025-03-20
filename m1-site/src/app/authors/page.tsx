"use client";
import React, { useEffect, useState } from "react";
import { useAuthors } from "../../hooks/useAuthors";
import { AuthorTable } from "../../components/AuthorTable";
import { SearchBar } from "../../components/SearchBar";
import CreateAuthorModal from "../../components/modals/CreateAuthorModal";
import DeleteAuthorModal from "../../components/modals/DeleteAuthorModal";
import { CreateAuthorModel } from "../../models/AuthorModel";

export default function ListAuthors() {
  const {
    authors,
    loading: authorsLoading,
    error: authorsError,
    fetchAuthors,
    createAuthor,
    deleteAuthor,
  } = useAuthors();

  const [isCreateAuthorModalOpen, setIsCreateAuthorModalOpen] = useState(false);
  const [isDeleteAuthorModalOpen, setIsDeleteAuthorModalOpen] = useState(false);
  const [selectedAuthorId, setSelectedAuthorId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Load authors when the component mounts
  useEffect(() => {
    fetchAuthors();
  }, [fetchAuthors]);

  // Save a new author and reload the authors from the backend
  const handleCreateAuthor = (newAuthor: CreateAuthorModel) => {
    createAuthor(newAuthor).then(() => {
      setIsCreateAuthorModalOpen(false); // Close the modal
    });
  };

  // Delete an author and reload the authors from the backend
  const handleDeleteAuthor = (id: string) => {
    deleteAuthor(id).then(() => {
      setIsDeleteAuthorModalOpen(false); // Close the delete confirmation modal
    });
  };

  // Handle search when the user presses "Enter" or clicks the "Search" button
  const handleSearch = () => {
    fetchAuthors(searchQuery);
  };

  // Handle "Enter" key press in the search input
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (authorsLoading) {
    return <p>Loading...</p>;
  }

  if (authorsError) {
    return <p>Error: {authorsError}</p>;
  }

  return (
    <div>
      <p>List of Authors</p>
      <div>
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
        />
        <button
          onClick={() => setIsCreateAuthorModalOpen(true)}
          style={{ marginLeft: "20px" }}
        >
          Create Author
        </button>
        <button
          onClick={() => fetchAuthors(undefined, "name", "ASC")}
          style={{ marginLeft: "20px" }}
        >
          Sort Ascending
        </button>
        <button
          onClick={() => fetchAuthors(undefined, "name", "DESC")}
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
        <AuthorTable
          authors={authors}
          onDelete={(id) => {
            setSelectedAuthorId(id);
            setIsDeleteAuthorModalOpen(true);
          }}
        />
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
