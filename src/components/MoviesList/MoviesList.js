import PropTypes from 'prop-types';
import { MovieListUl, MovieItem } from './MoviesList.styled';
import { MoviesListItem } from './MoviesListItem';
export const MoviesList = ({ movies }) => {
  return (
    <MovieListUl>
      {movies.map(item => (
        <MovieItem key={item.id}>
          <MoviesListItem movie={item} />
        </MovieItem>
      ))}
    </MovieListUl>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
