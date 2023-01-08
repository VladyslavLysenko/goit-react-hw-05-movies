import PropTypes from 'prop-types';
import { MoviesListItem } from './MoviesListItem';
export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          <MoviesListItem movie={item} />
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  item: PropTypes.object,
};
