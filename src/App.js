import React, { useState, useEffect } from 'react';
import BeerList from './components/BeerList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <SearchBar setSearchTerm={setSearchTerm} />
      <BeerList beers={filteredBeers} />
    </div>
  );
};

export default App;
