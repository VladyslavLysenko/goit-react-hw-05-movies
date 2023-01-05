import React from 'react';
import { Link } from 'react-router-dom';

export const MoviesListItem = ({ movie }) => {
  // console.log(movie.id);
  return <Link to={`${movie.id}`}>{movie.title}</Link>;
  
};
