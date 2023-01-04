import React from 'react';

export const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input name="q" />
      </label>
      <button type="submit">Search movies</button>
    </form>
  );
};
