import PropTypes from 'prop-types';
import {  Wrapper, Item } from './MoviesList.styled';
import { MoviesListItem } from './MoviesListItem';
export const MoviesList = ({ movies }) => {
  return (
    <Wrapper>
      {movies.map(item => (
        <Item key={item.id}>
          <Item>
            <MoviesListItem movie={item} />
          </Item>
        </Item>
      ))}
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
