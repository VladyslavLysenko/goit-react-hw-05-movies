import React from 'react';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import toast from 'react-hot-toast';
import api, { baseUrl, key, type } from 'Fetch/Fetch';
import { Title } from './Home.styled';


const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    api
      .FetchTrending(baseUrl, key, type)
      .then(resp => setMovies(resp.results))
      .catch(() => {
        toast.error('Ups... Something is wrong.', {
          duration: 4000,
          position: 'top-center',
        });
      });
  }, []);

  return (
    <div>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
