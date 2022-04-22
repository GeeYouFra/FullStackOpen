import React from 'react';

const Filter = ({ showFilter, handleChange }) => {
  return (
    <div>
      Filter phonebook with:{' '}
      <input value={showFilter} onChange={handleChange} />
    </div>
  );
};

export default Filter;
