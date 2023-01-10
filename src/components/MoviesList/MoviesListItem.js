import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink, MovieTitle } from './MoviesListItem.styled';


export const MoviesListItem = ({ movie }) => {
  const location = useLocation();
// console.log(movie);
  return (
    <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
      <img
        src={'https://www.themoviedb.org/t/p/w400' + movie.poster_path}
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </StyledLink>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};
