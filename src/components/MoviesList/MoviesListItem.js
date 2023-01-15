import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink, MovieTitle } from './MoviesListItem.styled';
import err from '../Cast/err.jpg';
export const MoviesListItem = ({ movie }) => {
  const location = useLocation();
  return (
    <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
      <img
        src={
          movie.poster_path
            ? 'https://www.themoviedb.org/t/p/w400' + movie.poster_path
            : err
        }
        alt={movie.title}
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </StyledLink>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};
