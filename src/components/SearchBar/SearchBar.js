import { useState } from 'react';
import toast from 'react-hot-toast';

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
      <label>
        <input name="q" onChange={handleMovieTitle} />
      </label>
      <button type="submit">Search movies</button>
    </form>
  );
};
