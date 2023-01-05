import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import toast from 'react-hot-toast';
import api from 'Fetch/Fetch';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const handleSubmit = movieName => {
    api.FetchSearchMovies(baseUrl, key, movieName).then(response => {
      console.log('result', response.results.length);
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
        setMovies(...movies, movieApiArr);
      }
    });

    // const getMovies = () => {
    //   return movies;
    // };

    // const getMovieById = movieId => {
    //   return movies.find(item => item.id === movieId);
    // };
  };
  console.log(movies);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
    </>
  );
};
