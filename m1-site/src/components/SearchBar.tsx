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
    <div>
      <input
        type="text"
        placeholder="Filter authors..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch} style={{ marginLeft: "20px" }}>
        Search
      </button>
    </div>
  );
};
