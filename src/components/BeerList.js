import React from 'react';
import BeerCard from './BeerCard';

const BeerList = ({ beers }) => {
  return (
    <div className="beer-list">
      {beers.map((beer, index) => (
        <BeerCard key={index} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
