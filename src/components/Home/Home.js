import React from 'react';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MovieDB } from 'components/App';
export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    MovieDB.searchMovie({ query: 'Alien' }, (err, res) => {
      console.log(res);
      setMovies(res.results);
    });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};
