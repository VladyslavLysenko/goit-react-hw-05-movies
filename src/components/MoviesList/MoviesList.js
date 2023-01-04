import { MoviesListItem } from './MoviesListItem/MoviesListItem';
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
