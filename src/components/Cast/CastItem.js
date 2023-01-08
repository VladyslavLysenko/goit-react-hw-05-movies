import PropTypes from 'prop-types';
import { ActorsImg, ActorsWrapper, Name } from './CastItem.styled';

export const CastItem = ({ item }) => {
  return (
    <>
      <ActorsWrapper>
        <ActorsImg
          src={'https://www.themoviedb.org/t/p/w400' + item.profile_path}
          alt={item.name}
          width="100"
        />

        <Name>Name:{item.name}</Name>
        <Name>Character:{item.character}</Name>
      </ActorsWrapper>
    </>
  );
};

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
