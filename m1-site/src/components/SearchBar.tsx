import React from "react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onSearch,
}) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Filter authors..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};
