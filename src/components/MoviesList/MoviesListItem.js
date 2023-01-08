import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const MoviesListItem = ({ movie }) => {
  return <Link to={`/movies/${movie.id}`}>{movie.title}</Link>;
};

MoviesListItem.propTypes = {
  item: PropTypes.object,
};
