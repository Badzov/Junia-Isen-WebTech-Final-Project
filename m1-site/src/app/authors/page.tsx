"use client";
import React, { useEffect, useState } from "react";
import { useAuthors } from "../../hooks/useAuthors";
import { AuthorTable } from "../../components/AuthorTable";
import { SearchBar } from "../../components/SearchBar";
import CreateAuthorModal from "../../components/modals/CreateAuthorModal";
import DeleteAuthorModal from "../../components/modals/DeleteAuthorModal";
import { CreateAuthorModel } from "../../models/AuthorModel";
import { PageTitle } from "../../components/PageTitle";

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
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  if (authorsError) {
    return <p className="text-center text-red-600">Error: {authorsError}</p>;
  }

  return (
    <div className="p-6">
      <PageTitle title="List of Authors" /> {/* Add PageTitle here */}
      <div className="mb-4">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onSearch={handleSearch}
        />
        <button
          onClick={() => setIsCreateAuthorModalOpen(true)}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Create Author
        </button>
        <button
          onClick={() => fetchAuthors(undefined, "name", "ASC")}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sort Ascending
        </button>
        <button
          onClick={() => fetchAuthors(undefined, "name", "DESC")}
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Sort Descending
        </button>
      </div>
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
  );
}
