import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Fetch search results from the backend (replace '/api/search' with your actual endpoint)
    try {
      const response = await fetch(`/api/search?query=${searchTerm}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error('Error fetching search results:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('An error occurred during search:', error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      handleSearch();
    } else {
      // Clear search results if the search term is empty
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center border-b py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={handleSearch}
        >
          <SearchIcon />
        </button>
      </div>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <ul className="absolute bg-white border rounded mt-2 p-2">
          {searchResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
