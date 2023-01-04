import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MoviesListItem = ({ movie }) => {
  return <Link to={`/movies/:${movie.id}`}>{movie.title}</Link>;
};

// ContactItem.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
