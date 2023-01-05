import React from 'react';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import api, { baseUrl, key, type } from 'Fetch/Fetch';

// import { MovieDB } from 'components/App';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api.FetchTrending(baseUrl, key, type).then(resp => setMovies(resp.results));
  });

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
