import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import toast from 'react-hot-toast';
import api from 'Fetch/Fetch';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = movieName => {
    api
      .FetchSearchMovies(baseUrl, key, movieName)
      .then(response => {
        if (response.results.length === 0) {
          toast.error('Sorry,we did not find...');
        } else {
          const movieApiArr = [];
          response.results.map(item =>
            movieApiArr.push({
              id: item.id,
              title: item.title,
            })
          );

          setMovies(movieApiArr);
        }
      })
      .catch(() => {
        toast.error('Ups... Something is wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      });
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
