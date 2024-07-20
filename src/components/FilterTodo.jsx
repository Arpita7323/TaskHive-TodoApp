import React from 'react';

const FilterTodo = ({ filter, setFilter }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setFilter('all')}
        className={`p-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        All
      </button>
      <button
        onClick={() => setFilter('completed')}
        className={`p-2 rounded ${filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter('pending')}
        className={`p-2 rounded ${filter === 'pending' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
      >
        Pending
      </button>
    </div>
  );
};

export default FilterTodo;
