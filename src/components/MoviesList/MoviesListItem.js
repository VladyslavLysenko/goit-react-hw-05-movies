import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './MoviesListItem.styled';

export const MoviesListItem = ({ movie }) => {
  const location = useLocation();

  return (
    <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
      {movie.title}
    </StyledLink>
  );
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};
