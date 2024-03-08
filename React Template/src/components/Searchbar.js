import React from 'react';

const SearchBar = ({ placeholder, handleChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded"
        onClick={() => alert('Search button clicked!')} // Add your search functionality here
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
