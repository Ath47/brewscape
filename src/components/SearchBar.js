import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search beers..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
