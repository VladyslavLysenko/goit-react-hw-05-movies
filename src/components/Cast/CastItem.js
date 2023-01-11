import PropTypes from 'prop-types';
import { ActorsImg, ActorsWrapper, Name } from './CastItem.styled';
import React from 'react';
import err from './err.jpg';

export const CastItem = ({ item }) => {
  return (
    <>
      <ActorsWrapper>
        <ActorsImg
          src={
            item.profile_path
              ? 'https://www.themoviedb.org/t/p/w400' + item.profile_path
              : err
          }
          alt={item.name}
          width="100"
          height='auto'
        />
        <Name>Name:{item.name?item.name: 'Вибачте ,нічого не зайдено'}</Name>
        <Name>Character:{item.character?item.character:'Вибачте ,нічого не зайдено'}</Name>{' '}
      </ActorsWrapper>
    </>
  );
};

CastItem.propTypes = {
  item: PropTypes.object.isRequired,
};
