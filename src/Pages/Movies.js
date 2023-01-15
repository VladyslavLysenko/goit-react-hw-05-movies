import React from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState } from 'react';
import { useEffect } from 'react';
import { baseUrl, key } from 'Fetch/Fetch';
import toast from 'react-hot-toast';
import api from 'Fetch/Fetch';

import { useSearchParams } from 'react-router-dom';

import {
  Input,
  InputBox,
  InputBtn,
} from '../components/SearchBar/SearchBar.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleSubmitForm = e => {
    e.preventDefault();
    let movieTitle = e.target.q.value;
    if (movieTitle.trim() === '') {
      toast('Please enter Movie Title here');
      return;
    }
    setSearchParams({ q: movieTitle });
  };

  return (
    <>
      <form onSubmit={handleSubmitForm} method="get">
        <InputBox>
          <label>
            <Input name="q" />
          </label>
          <InputBtn type="submit">Search movies</InputBtn>
        </InputBox>
      </form>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
