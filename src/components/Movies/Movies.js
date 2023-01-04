import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';

export const Movies = () => {
  const movies = [];
  const handleSubmit = () => {};

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
