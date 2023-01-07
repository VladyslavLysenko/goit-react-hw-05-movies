import React from 'react';
import { Link } from 'react-router-dom';
export const MoviesListItem = ({ movie }) => {
  return <Link to={`/movies/${movie.id}`}>{movie.title}</Link>;
};
