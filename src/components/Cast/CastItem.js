import PropTypes from 'prop-types';

export const CastItem = ({ item }) => {
  return (
    <>
      <img
        src={'https://www.themoviedb.org/t/p/w400' + item.profile_path}
        alt={item.name}
        width="100"
      />

      <p>Name:{item.name}</p>
      <p>Character:{item.character}</p>
    </>
  );
};

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
