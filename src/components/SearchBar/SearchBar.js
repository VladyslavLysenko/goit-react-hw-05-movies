import { useState } from 'react';
import toast from 'react-hot-toast';
import PropTypes from 'prop-types';
import { Input, InputBox, InputBtn } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [movieTitle, setMovieTitle] = useState('');

  const handleMovieTitle = e => {
    setMovieTitle(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (movieTitle.trim() === '') {
      toast('Please enter Movie Title here');
      setMovieTitle('');
      return;
    }
    onSubmit(movieTitle);
    setMovieTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBox>
        <label>
          <Input name="q" onChange={handleMovieTitle} />
        </label>
        <InputBtn type="submit">Search movies</InputBtn>
      </InputBox>
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
