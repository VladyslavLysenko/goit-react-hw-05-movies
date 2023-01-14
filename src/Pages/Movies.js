import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import toast from 'react-hot-toast';
import api from 'Fetch/Fetch';

import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, _] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const handleSubmit = movieName => {
    api
      .FetchSearchMovies(baseUrl, key, movieName)
      .then(response => {
        if (response.results.length === 0) {
          toast.error('Sorry,we did not find...');
        } else {
          let movieApiArr = [];
          response.results.map(item =>
            movieApiArr.push({
              poster_path: item.poster_path,
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

  useEffect(() => {
    if (query) {
      handleSubmit(query);
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
