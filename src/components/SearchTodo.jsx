import React from 'react';

const SearchTodo = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search Todos"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 border border-gray-300 rounded mb-4"
    />
  );
};

export default SearchTodo;
