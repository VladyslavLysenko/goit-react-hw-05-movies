import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './MoviesListItem.styled';

export const MoviesListItem = ({ movie }) => {
  return <StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink>;
};

MoviesListItem.propTypes = {
  movie: PropTypes.object,
};
