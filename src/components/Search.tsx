// components/SearchForm.tsx
import React, { useState } from 'react';

const SearchForm = ({ onSearch }: { onSearch: (searchTerm: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products"
        className="border px-4 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
