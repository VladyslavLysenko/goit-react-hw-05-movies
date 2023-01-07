import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Toaster } from 'react-hot-toast';
import { Cast } from './Cast/Cast';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <>
      <Toaster />
      <header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>

        {/* <Route path="/trending/get-trending" element={<Trending />} />
        <Route path="/search/search-movies" element={<SearchMovies />} />
        <Route path="/movies/get-movie-credits" element={<MovieCredits />} />
        <Route path="/movies/get-movie-reviews" element={<MovieReviews />} />  */}
      </Routes>
    </>
  );
};
